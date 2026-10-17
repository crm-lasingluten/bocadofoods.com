/* Bocado Contigo · programa de fidelización de Bocado Functional Foods
   Página: bocado-contigo.html (necesita <div id="bc-app">)
   - Alta de afiliado → tarjeta virtual con código BC-XXXXXX
   - Área privada (código + correo): saldo, cupones, movimientos, primicias
   - Canje de puntos → cupón pendiente + aviso por correo a hola@bocadofoods.com
   Datos en Supabase (ver supabase/bocado-contigo.sql). Correo con Web3Forms.
   Atributo data-demo="1" en el <script> → funciona sin base de datos (contigo-demo.js). */
(function(){
var S=document.currentScript||{getAttribute:function(){return ''}};
var ROOT=S.getAttribute('data-root')||'';
var COND=S.getAttribute('data-cond')||'legal/condiciones-bocado-contigo.html';
var PRIV=S.getAttribute('data-priv')||'legal/politica-de-privacidad.html';
var DEMO=S.getAttribute('data-demo')==='1'||/[?&]demo=1/.test(location.search);

/* ---------- configuración ---------- */
var CFG={
  shop:'https://shop.bocadofoods.com',
  supabase:{url:'https://lbbpnnvwtanurtjqgcqv.supabase.co',
    key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiYnBubnZ3dGFudXJ0anFnY3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjM2NDEsImV4cCI6MjA5MjMzOTY0MX0.a25lrgUlzDM4TSp4c6KOCQ3ERZnSk8-5r2y9DbhRPxg'},
  // Clave de acceso de Web3Forms creada con hola@bocadofoods.com (la misma del formulario de contacto)
  web3formsKey:'',
  avisoA:'hola@bocadofoods.com'
};
var STORE='bocadoContigoSesion';

/* ---------- utilidades ---------- */
var app=document.getElementById('bc-app');if(!app)return;
function $(s,c){return (c||document).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var nf=new Intl.NumberFormat('es-ES');
function eur(n){n=Number(n)||0;return new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',minimumFractionDigits:n%1?2:0,maximumFractionDigits:2}).format(n)}
function fecha(d){if(!d)return '';var x=new Date(String(d).length===10?d+'T12:00:00':d);return x.toLocaleDateString('es-ES',{day:'2-digit',month:'2-digit',year:'numeric'})}
function mesAnio(d){var x=new Date(d);return ('0'+(x.getMonth()+1)).slice(-2)+'/'+x.getFullYear()}
function ses(v){try{if(v===undefined)return JSON.parse(localStorage.getItem(STORE));if(v===null)localStorage.removeItem(STORE);else localStorage.setItem(STORE,JSON.stringify(v))}catch(e){return null}}

function rpc(name,params){
  if(DEMO&&window.BocadoContigoDemo)return window.BocadoContigoDemo.rpc(name,params);
  return fetch(CFG.supabase.url+'/rest/v1/rpc/'+name,{method:'POST',
    headers:{apikey:CFG.supabase.key,Authorization:'Bearer '+CFG.supabase.key,'Content-Type':'application/json'},
    body:JSON.stringify(params||{})}).then(function(r){if(!r.ok)throw new Error('http '+r.status);return r.json()});
}

var ERR={
  condiciones:'Para unirte tienes que aceptar las condiciones del programa y la política de privacidad.',
  nombre:'Escribe tu nombre.',
  email:'Revisa el correo electrónico: parece que no está bien escrito.',
  ya_registrado:'Este correo ya forma parte de Bocado Contigo. Entra con tu código en «Ya soy de Bocado Contigo». Si no lo encuentras, escríbenos a hola@bocadofoods.com.',
  no_encontrado:'No encontramos ninguna tarjeta con ese código y ese correo. Revisa los datos.',
  canje_pendiente:'Ya tienes un cupón en proceso de activación. Podrás pedir otro en cuanto esté activo.',
  red:'No hemos podido conectar. Inténtalo de nuevo en unos minutos.'
};
function errTxt(r){
  if(r.error==='minimo')return 'El canje mínimo es de '+nf.format(r.minimo)+' puntos.';
  if(r.error==='multiplo')return 'Los puntos se canjean en bloques de '+r.multiplo+' (1 € cada bloque).';
  if(r.error==='saldo')return 'No tienes tantos puntos: tu saldo es de '+nf.format(r.saldo)+'.';
  return ERR[r.error]||ERR.red;
}

/* ---------- tarjeta virtual ---------- */
var RING='<svg class="bc-card-ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="15" stroke-linecap="round" stroke-dasharray="190 49" transform="rotate(-20 50 50)"/></svg>';
function cardHTML(a){
  var nombre=(a.nombre+' '+(a.apellidos||'')).trim();
  return '<div class="bc-card" role="img" aria-label="Tarjeta Bocado Contigo de '+esc(nombre)+', código '+esc(a.codigo)+'">'+
    '<div class="bc-card-pat"></div>'+RING+
    '<img class="bc-card-logo" src="'+ROOT+'assets/marca/logo-blanco.png" alt="">'+
    '<span class="bc-card-tag">Bocado<br>Contigo</span>'+
    '<div class="bc-card-code"><small>Código de afiliado</small><b>'+esc(a.codigo)+'</b></div>'+
    '<div class="bc-card-foot"><span class="bc-card-name">'+esc(nombre)+'</span><span>Desde '+mesAnio(a.alta||Date.now())+'</span></div>'+
  '</div>';
}
function loadImg(src){return new Promise(function(ok){var i=new Image();i.onload=function(){ok(i)};i.onerror=function(){ok(null)};i.src=src})}
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function cardPNG(a){
  var W=1200,H=756,f="'Concasse','Trebuchet MS',sans-serif";
  var fonts=document.fonts?Promise.all(['300','700','900'].map(function(w){return document.fonts.load(w+' 40px Concasse')})).catch(function(){}):Promise.resolve();
  return Promise.all([loadImg(ROOT+'assets/marca/logo-blanco.png'),loadImg(ROOT+'assets/marca/pattern-blanco.png'),fonts]).then(function(r){
    var cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d');
    rr(c,0,0,W,H,48);c.save();c.clip();
    c.fillStyle='#111';c.fillRect(0,0,W,H);
    if(r[1]){c.globalAlpha=.07;c.fillStyle=c.createPattern(r[1],'repeat');c.fillRect(0,0,W,H);c.globalAlpha=1}
    // anillo abierto de la marca
    c.save();c.translate(W*.93,H*.47);c.rotate(-20*Math.PI/180);c.strokeStyle='#d42a25';c.lineWidth=H*.56*.15;c.lineCap='round';
    c.beginPath();c.arc(0,0,H*.56*.38,0,(190/238.76)*2*Math.PI);c.stroke();c.restore();
    c.fillStyle='#fff';c.textBaseline='alphabetic';
    if(r[0]){var lw=300,lh=lw*r[0].height/r[0].width;c.drawImage(r[0],70,70,lw,lh)}
    c.font='700 30px '+f;c.textAlign='right';c.fillText('BOCADO',W-70,96);c.fillText('CONTIGO',W-70,132);
    c.textAlign='left';c.globalAlpha=.7;c.font='700 24px '+f;c.fillText('CÓDIGO DE AFILIADO',70,H-260);c.globalAlpha=1;
    c.font='900 104px '+f;c.fillText(a.codigo,64,H-160);
    c.font='700 30px '+f;c.fillText((a.nombre+' '+(a.apellidos||'')).trim().toUpperCase(),70,H-70);
    c.textAlign='right';c.globalAlpha=.7;c.font='400 26px '+f;c.fillText('Desde '+mesAnio(a.alta||Date.now()),W-70,H-70);
    c.restore();
    return new Promise(function(ok){cv.toBlob(ok,'image/png')});
  });
}
function descargarTarjeta(a,btn){
  btn.disabled=true;cardPNG(a).then(function(b){
    var u=URL.createObjectURL(b),l=document.createElement('a');l.href=u;l.download='tarjeta-bocado-contigo-'+a.codigo+'.png';
    document.body.appendChild(l);l.click();l.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000);btn.disabled=false;
  }).catch(function(){btn.disabled=false});
}
function copiar(txt,btn){
  var done=function(){var o=btn.textContent;btn.textContent='¡Copiado!';setTimeout(function(){btn.textContent=o},1600)};
  if(navigator.clipboard)navigator.clipboard.writeText(txt).then(done,function(){});else{var t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand('copy');done()}catch(e){}t.remove()}
}

/* ---------- vistas ---------- */
var R={puntos_por_euro:1,puntos_por_euro_dto:20,canje_minimo:100,bienvenida:50,bonus_cumple:50,factor_compra_min:2,cupon_validez_dias:90,multiplicador:1};
var demoNote=DEMO?'<p class="bc-demo">Modo demostración: los datos se guardan solo en este navegador. Prueba con el código <b>BC-7K4P9M</b> y el correo <b>laura@ejemplo.com</b>, o date de alta.</p>':'';

function vistaInvitado(msgAcceso){
  var meses='<option value="">Mes</option>'+['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'].map(function(m,i){return '<option value="'+(i+1)+'">'+m+'</option>'}).join('');
  var dias='<option value="">Día</option>';for(var i=1;i<=31;i++)dias+='<option>'+i+'</option>';
  app.innerHTML=demoNote+
  '<div class="bc-forms">'+
   '<form class="bc-box bc-alta" novalidate>'+
    '<p class="eyebrow">Únete gratis</p><h2>Quiero mi tarjeta</h2>'+
    '<p class="bc-sub">Rellena tus datos y recibe al momento tu tarjeta virtual con tu código de afiliado. Te regalamos <b>'+R.bienvenida+' puntos</b> de bienvenida.</p>'+
    '<div class="bc-row"><label>Nombre*<input name="nombre" autocomplete="given-name" required></label><label>Apellidos<input name="apellidos" autocomplete="family-name"></label></div>'+
    '<label>Correo electrónico*<input name="email" type="email" autocomplete="email" required><small>Usa el mismo correo con el que compras en la tienda online: así tus compras suman puntos.</small></label>'+
    '<div class="bc-row"><label>Teléfono<input name="telefono" type="tel" autocomplete="tel"></label><label>Código postal<input name="cp" inputmode="numeric" autocomplete="postal-code" maxlength="5"></label></div>'+
    '<fieldset class="bc-cumple"><legend>Tu cumpleaños <span>(te regalamos '+R.bonus_cumple+' puntos)</span></legend><select name="dia" aria-label="Día">'+dias+'</select><select name="mes" aria-label="Mes">'+meses+'</select></fieldset>'+
    '<label class="bc-check"><input type="checkbox" name="primicias" checked><span>Quiero recibir las primicias de Bocado: lanzamientos antes que nadie, muestras con mis compras y ofertas para afiliados.</span></label>'+
    '<label class="bc-check"><input type="checkbox" name="acepta" required><span>Acepto las <a href="'+ROOT+COND+'" target="_blank" rel="noopener">condiciones de Bocado Contigo</a> y la <a href="'+ROOT+PRIV+'" target="_blank" rel="noopener">política de privacidad</a>.*</span></label>'+
    '<p class="bc-msg" role="alert"></p>'+
    '<button class="btn red" type="submit">Crear mi tarjeta</button>'+
   '</form>'+
   '<form class="bc-box bc-acceso" novalidate>'+
    '<p class="eyebrow">Ya soy de Bocado Contigo</p><h2>Mi Bocado Contigo</h2>'+
    '<p class="bc-sub">Entra con el código de tu tarjeta y tu correo para ver tus puntos y canjearlos.</p>'+
    '<label>Código de afiliado<input name="codigo" placeholder="BC-XXXXXX" autocapitalize="characters" autocomplete="off" required></label>'+
    '<label>Correo electrónico<input name="email" type="email" autocomplete="email" required></label>'+
    '<p class="bc-msg" role="alert">'+(msgAcceso?esc(msgAcceso):'')+'</p>'+
    '<button class="btn" type="submit">Ver mis puntos</button>'+
    '<p class="bc-mini">¿Has perdido tu código? Escríbenos a <a href="mailto:hola@bocadofoods.com?subject=Bocado%20Contigo%20%C2%B7%20He%20perdido%20mi%20c%C3%B3digo">hola@bocadofoods.com</a> desde el correo con el que te diste de alta.</p>'+
   '</form>'+
  '</div>';

  $('.bc-alta').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target,msg=$('.bc-msg',f),btn=$('button',f);msg.textContent='';
    var d={p_nombre:f.nombre.value,p_apellidos:f.apellidos.value,p_email:f.email.value,p_telefono:f.telefono.value||null,p_cp:f.cp.value||null,
      p_cumple_dia:f.dia.value?+f.dia.value:null,p_cumple_mes:f.mes.value?+f.mes.value:null,p_primicias:f.primicias.checked,p_acepta:f.acepta.checked};
    if(!d.p_acepta){msg.textContent=ERR.condiciones;return}
    if(!d.p_nombre.trim()){msg.textContent=ERR.nombre;f.nombre.focus();return}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(d.p_email.trim())){msg.textContent=ERR.email;f.email.focus();return}
    btn.disabled=true;btn.textContent='Creando tu tarjeta…';
    rpc('contigo_alta',d).then(function(r){
      if(!r.ok){msg.textContent=errTxt(r);btn.disabled=false;btn.textContent='Crear mi tarjeta';return}
      ses({codigo:r.codigo,email:r.email});vistaBienvenida(r);
    }).catch(function(){msg.textContent=ERR.red;btn.disabled=false;btn.textContent='Crear mi tarjeta'});
  });
  $('.bc-acceso').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target,msg=$('.bc-msg',f),btn=$('button',f);
    if(!f.codigo.value.trim()||!f.email.value.trim()){msg.textContent='Escribe tu código y tu correo.';return}
    btn.disabled=true;entrar(f.codigo.value,f.email.value,function(err){msg.textContent=err;btn.disabled=false});
  });
}

function vistaBienvenida(a){
  app.innerHTML=demoNote+
  '<div class="bc-welcome">'+
   '<div class="bc-welcome-card">'+cardHTML(a)+'</div>'+
   '<div class="bc-welcome-txt">'+
    '<p class="eyebrow">Ya eres de Bocado Contigo</p>'+
    '<h2>¡Hola, '+esc(a.nombre)+'! Esta es tu tarjeta</h2>'+
    '<p>Tu código de afiliado es <b class="bc-code-inline">'+esc(a.codigo)+'</b>. Guárdalo: lo necesitas para entrar en tu área y consultar o canjear tus puntos.</p>'+
    '<p>Ya tienes <b>'+nf.format(a.saldo)+' puntos</b> de bienvenida. Cada euro que gastes en la tienda online con el correo <b>'+esc(a.email)+'</b> suma '+(R.puntos_por_euro==1?'1 punto':R.puntos_por_euro+' puntos')+'.</p>'+
    '<div class="bc-actions"><button class="btn red" data-dl>Descargar mi tarjeta</button><button class="btn ghost" data-copy>Copiar código</button></div>'+
    '<div class="bc-actions"><button class="btn" data-go>Entrar en mi área</button><a class="btn ghost" href="'+CFG.shop+'">Ir a la tienda</a></div>'+
   '</div>'+
  '</div>';
  $('[data-dl]',app).onclick=function(){descargarTarjeta(a,this)};
  $('[data-copy]',app).onclick=function(){copiar(a.codigo,this)};
  $('[data-go]',app).onclick=function(){entrar(a.codigo,a.email)};
  app.scrollIntoView({behavior:'smooth',block:'start'});
}

function entrar(codigo,email,onErr){
  rpc('contigo_consulta',{p_codigo:codigo,p_email:email}).then(function(r){
    if(!r.ok){ses(null);if(onErr)onErr(errTxt(r));else vistaInvitado(errTxt(r));return}
    ses({codigo:r.codigo,email:r.email});if(r.reglas)R=r.reglas;vistaArea(r);
  }).catch(function(){if(onErr)onErr(ERR.red);else vistaInvitado(ERR.red)});
}

var TIPO={bienvenida:'Regalo de bienvenida',compra:'Compra',canje:'Canje por cupón',reintegro:'Puntos devueltos',bonus:'Regalo',ajuste:'Ajuste',caducidad:'Puntos caducados'};
var ESTADO={pendiente:'Pendiente de activación',activo:'Activo',usado:'Usado',anulado:'Anulado'};

function vistaArea(a,aviso){
  var dto=R.puntos_por_euro_dto,min=R.canje_minimo,max=Math.floor(a.saldo/dto)*dto,valor=Math.floor(a.saldo/dto);
  var pend=a.canjes.some(function(c){return c.estado==='pendiente'});
  var progreso=a.saldo<min
    ?'<div class="bc-bar"><span style="width:'+Math.round(a.saldo/min*100)+'%"></span></div><p class="bc-hint">Te faltan <b>'+nf.format(min-a.saldo)+' puntos</b> para tu primer cupón de '+eur(min/dto)+'. Es decir, unos '+eur(Math.ceil((min-a.saldo)/(R.puntos_por_euro*R.multiplicador)))+' de compra.</p>'
    :'<p class="bc-hint">Puedes canjear hasta <b>'+eur(max/dto)+'</b> de descuento.</p>';

  var canjeBox;
  if(pend)canjeBox='<p class="bc-note">Tienes un cupón pendiente de activación. Te avisaremos por correo cuando esté listo y podrás pedir otro.</p>';
  else if(a.saldo<min)canjeBox='<p class="bc-note">Cuando llegues a '+nf.format(min)+' puntos podrás canjearlos aquí por un cupón de descuento.</p>';
  else canjeBox=
    '<form class="bc-canje" novalidate>'+
     '<label for="bc-pts">¿Cuántos puntos quieres canjear?</label>'+
     '<div class="bc-pts"><input id="bc-pts" name="puntos" type="number" inputmode="numeric" min="'+min+'" max="'+max+'" step="'+dto+'" value="'+max+'"><span>puntos</span></div>'+
     '<div class="bc-chips">'+[min,Math.max(min,Math.floor(max/2/dto)*dto),max].filter(function(v,i,s){return s.indexOf(v)===i}).map(function(v,i,s){return '<button type="button" data-p="'+v+'">'+(v===max&&s.length>1?'Todos ('+nf.format(v)+')':nf.format(v))+'</button>'}).join('')+'</div>'+
     '<div class="bc-calc" aria-live="polite"></div>'+
     '<p class="bc-msg" role="alert"></p>'+
     '<button class="btn red" type="submit">Generar mi cupón</button>'+
     '<p class="bc-mini">Los puntos se descuentan al pedir el cupón. Lo activamos en la tienda en un máximo de 24 h laborables y te avisamos por correo.</p>'+
    '</form>';

  var cupones=a.canjes.length?a.canjes.map(function(c){
    return '<li class="bc-cupon is-'+c.estado+'"><div><b>'+eur(c.euros)+' de descuento</b><span>'+nf.format(c.puntos)+' puntos · pedido el '+fecha(c.created_at)+'</span>'+
      (c.estado==='activo'?'<span>Compra mínima '+eur(c.compra_minima)+' · válido hasta el '+fecha(c.caduca)+' · un solo uso</span>':'')+'</div>'+
      '<div class="bc-cupon-r"><em>'+ESTADO[c.estado]+'</em>'+
      (c.estado==='activo'&&c.cupon?'<code>'+esc(c.cupon)+'</code><span class="bc-cupon-btns"><button class="btn sm ghost" data-cp="'+esc(c.cupon)+'">Copiar</button><a class="btn sm" href="'+CFG.shop+'">Usar en la tienda</a></span>':'')+
      '</div></li>'}).join(''):'<li class="bc-empty">Todavía no has canjeado puntos.</li>';

  var movs=a.movimientos.map(function(m){
    var t=TIPO[m.tipo]||m.tipo,d=m.tipo==='compra'?(m.pedido?'Pedido '+esc(m.pedido):'')+(m.importe?' · '+eur(m.importe):''):esc(m.nota||'');
    if(m.tipo==='bonus'&&m.nota)t=esc(m.nota),d='';if(d===t)d='';
    return '<li><div><b>'+t+'</b><span>'+fecha(m.created_at)+(d?' · '+d:'')+'</span></div><strong class="'+(m.puntos<0?'neg':'pos')+'">'+(m.puntos>0?'+':'')+nf.format(m.puntos)+'</strong></li>'}).join('');

  app.innerHTML=demoNote+(aviso||'')+
  '<div class="bc-area">'+
   '<div class="bc-area-head"><div><p class="eyebrow">Mi Bocado Contigo</p><h2>Hola, '+esc(a.nombre)+'</h2></div><button class="bc-out" type="button">Salir</button></div>'+
   '<div class="bc-grid">'+
    '<div class="bc-col">'+cardHTML(a)+
     '<div class="bc-actions"><button class="btn sm ghost" data-dl>Descargar tarjeta</button><button class="btn sm ghost" data-copy>Copiar código</button></div>'+
    '</div>'+
    '<div class="bc-box bc-saldo">'+
     '<p class="bc-label">Tus puntos</p>'+
     '<p class="bc-big">'+nf.format(a.saldo)+'</p>'+
     '<p class="bc-eq">Equivalen a <b>'+eur(valor)+'</b> en descuentos</p>'+progreso+
     (R.multiplicador>1?'<p class="bc-promo">¡Ahora tus compras suman puntos ×'+String(R.multiplicador).replace('.',',')+'!</p>':'')+
    '</div>'+
   '</div>'+
   '<div class="bc-grid bc-grid2">'+
    '<section class="bc-box"><h3>Canjear puntos</h3>'+canjeBox+'</section>'+
    '<section class="bc-box"><h3>Mis cupones</h3><ul class="bc-list bc-cupones">'+cupones+'</ul></section>'+
   '</div>'+
   (a.primicia?'<section class="bc-primicia"><p class="eyebrow">Primicia para afiliados</p><h3>'+esc(a.primicia.nombre)+'</h3><p>'+esc(a.primicia.texto||'')+'</p><a class="btn light" href="'+CFG.shop+'">Hacer mi pedido</a></section>':
    (!a.primicias?'<section class="bc-primicia is-off"><p>No recibes las primicias de Bocado. Si quieres recibir los lanzamientos antes que nadie y muestras con tus compras, escríbenos a hola@bocadofoods.com.</p></section>':''))+
   '<section class="bc-box"><h3>Movimientos</h3><ul class="bc-list bc-movs">'+(movs||'<li class="bc-empty">Sin movimientos.</li>')+'</ul></section>'+
  '</div>';

  $('.bc-out',app).onclick=function(){ses(null);vistaInvitado()};
  $('[data-dl]',app).onclick=function(){descargarTarjeta(a,this)};
  $('[data-copy]',app).onclick=function(){copiar(a.codigo,this)};
  $$('[data-cp]',app).forEach(function(b){b.onclick=function(){copiar(b.getAttribute('data-cp'),b)}});

  var f=$('.bc-canje',app);if(!f)return;
  var inp=f.puntos,calc=$('.bc-calc',f),msg=$('.bc-msg',f),btn=$('button[type=submit]',f);
  function upd(){
    var p=parseInt(inp.value,10)||0,ok=p>=min&&p<=a.saldo&&p%dto===0;
    $$('.bc-chips button',f).forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-p')===p)});
    if(!ok){calc.innerHTML='<span class="bc-calc-err">'+(p>a.saldo?'Tu saldo es de '+nf.format(a.saldo)+' puntos.':p<min?'El mínimo son '+nf.format(min)+' puntos.':'Usa múltiplos de '+dto+' puntos (cada '+dto+' = 1 €).')+'</span>';btn.disabled=true;return}
    var e=p/dto;btn.disabled=false;
    calc.innerHTML='<div class="bc-calc-val"><b>'+eur(e)+'</b><span>de descuento</span></div><ul><li>Compra mínima: '+eur(e*R.factor_compra_min)+'</li><li>Válido '+R.cupon_validez_dias+' días · un solo uso</li><li>Te quedarán '+nf.format(a.saldo-p)+' puntos</li></ul>';
  }
  inp.addEventListener('input',function(){f.removeAttribute('data-ok');btn.textContent='Generar mi cupón';btn.classList.add('red');upd()});
  $$('.bc-chips button',f).forEach(function(b){b.onclick=function(){inp.value=b.getAttribute('data-p');f.removeAttribute('data-ok');btn.textContent='Generar mi cupón';btn.classList.add('red');upd()}});
  upd();
  f.addEventListener('submit',function(e){
    e.preventDefault();var p=parseInt(inp.value,10);msg.textContent='';
    if(f.getAttribute('data-ok')!==String(p)){   // primer clic: pedir confirmación en la propia página
      f.setAttribute('data-ok',String(p));btn.textContent='Confirmar: canjear '+nf.format(p)+' puntos por '+eur(p/dto);btn.classList.remove('red');return;
    }
    btn.disabled=true;btn.textContent='Generando tu cupón…';
    rpc('contigo_canjear',{p_codigo:a.codigo,p_email:a.email,p_puntos:p}).then(function(r){
      if(!r.ok){msg.textContent=errTxt(r);btn.disabled=false;btn.textContent='Generar mi cupón';return}
      return avisarBocado(r).then(function(){
        var av='<div class="bc-ok" role="status"><b>¡Cupón de '+eur(r.euros)+' solicitado!</b><span>Lo estamos activando en la tienda. En un máximo de 24 h laborables recibirás un correo de hola@bocadofoods.com y el código aparecerá aquí, en «Mis cupones».</span></div>';
        rpc('contigo_consulta',{p_codigo:a.codigo,p_email:a.email}).then(function(x){if(x.ok)vistaArea(x,av)});
      });
    }).catch(function(){msg.textContent=ERR.red;btn.disabled=false;btn.textContent='Generar mi cupón'});
  });
}

/* ---------- aviso a hola@bocadofoods.com (Web3Forms) ---------- */
function avisarBocado(c){
  var nombre=(c.nombre+' '+(c.apellidos||'')).trim(),hasta=fecha(c.caduca);
  var data={
    access_key:CFG.web3formsKey,
    subject:'Bocado Contigo · Activar cupón '+c.cupon+' ('+eur(c.euros)+')',
    from_name:'Bocado Contigo · web',
    replyto:c.email,
    'Qué hay que hacer':'1) Crear el cupón en PrestaShop con estos datos. 2) Marcarlo como activo en el panel de Bocado Contigo. 3) Responder a este correo (la respuesta le llega al cliente).',
    'Cliente':nombre,
    'Correo del cliente':c.email,
    'Código de afiliado':c.codigo,
    'Nº de canje':String(c.canje_id),
    'Puntos canjeados':nf.format(c.puntos),
    'CÓDIGO DEL CUPÓN':c.cupon,
    'Descuento':eur(c.euros)+' (importe fijo, IVA incluido)',
    'Compra mínima':eur(c.compra_minima),
    'Válido hasta':hasta,
    'Usos':'1 en total · 1 por cliente · solo para el cliente '+c.email,
    'Pasos en PrestaShop':'Catálogo › Descuentos › Reglas del carrito › Añadir nueva regla. Información: nombre «Bocado Contigo '+c.cupon+'», código «'+c.cupon+'», cantidad total 1, cantidad por usuario 1. Condiciones: limitar al cliente '+c.email+', válido hasta '+hasta+', importe mínimo '+eur(c.compra_minima)+' (IVA incl.). Acciones: descuento de importe '+eur(c.euros)+' IVA incluido.',
    'Respuesta sugerida':'¡Hola, '+c.nombre+'! Tu cupón Bocado Contigo ya está activo. Código: '+c.cupon+' · Descuento: '+eur(c.euros)+' · Compra mínima: '+eur(c.compra_minima)+' · Válido hasta el '+hasta+' · Un solo uso. Escríbelo en el carrito de '+CFG.shop.replace('https://','')+'. ¡Gracias por estar con Bocado!'
  };
  if(DEMO||!CFG.web3formsKey){if(window.console)console.info('[Bocado Contigo] Correo a '+CFG.avisoA+(DEMO?' (simulado)':' NO enviado: falta web3formsKey'),data);return Promise.resolve()}
  return fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
    .then(function(){},function(){}); // si falla el correo, el canje ya está guardado y aparece en el panel
}

/* ---------- arranque ---------- */
function start(){
  var s=ses();
  if(s&&s.codigo&&s.email){app.innerHTML='<p class="bc-loading">Cargando tu Bocado Contigo…</p>';entrar(s.codigo,s.email)}
  else{rpc('contigo_reglas_publicas').then(function(r){if(r&&r.canje_minimo)R=r}).catch(function(){}).then(function(){vistaInvitado()})}
}
if(DEMO&&!window.BocadoContigoDemo){var d=document.createElement('script');d.src=ROOT+'js/contigo-demo.js';d.onload=start;document.head.appendChild(d)}
else start();
})();
