/* Promos de Bocado · «Bocado Contigo» y «Juega y gana»
   Se carga en todas las páginas en español y en catalán (js/promo.js).
   1. Barra superior: alterna el aviso de envío con Bocado Contigo y Juega y gana.
   2. Botón flotante: recuerda el club y el juego mientras se navega (se puede cerrar).
   3. Al pulsar SHOP o «Comprar»: propone jugar para llevarse un descuento antes de ir a la tienda.
   4. Al ir a salir de la web: invita a unirse a Bocado Contigo.
   Límites: cada aviso grande sale como mucho una vez por visita; si se rechaza, no vuelve en unos días;
   a los afiliados no se les invita a unirse; si ya han ganado en los tres juegos hoy, no se les invita a jugar. */
(function(){
if(window.__bocadoPromo)return;window.__bocadoPromo=1;

/* ---------- configuración ---------- */
var CFG={
  rotarCada:6000,          // ms entre mensajes de la barra superior
  flotanteTras:12000,      // ms antes de mostrar el botón flotante (o al bajar un 35 % de la página)
  salidaMinimo:8000,       // ms en la página antes de poder mostrar el aviso de salida
  salidaMovil:45000,       // en móvil (sin ratón) se muestra tras este tiempo de visita, si ha visto 2 páginas
  diasTrasRechazo:3,       // días sin volver a mostrar un aviso que se ha cerrado con «Ahora no»
  shop:'shop.bocadofoods.com'
};

var S=document.currentScript;
var ROOT=S&&S.src?new URL('..',S.src).href:'/';
var L=(document.documentElement.lang||'es').slice(0,2)==='ca'?'ca':'es';
var PATH=location.pathname;
var EN_CONTIGO=/bocado-contigo\.html$/.test(PATH), EN_JUEGO=/(juega-y-gana|juga-i-guanya)\.html$/.test(PATH);
var URL_CONTIGO=ROOT+'bocado-contigo.html', URL_JUEGO=ROOT+(L==='ca'?'ca/juga-i-guanya.html':'juega-y-gana.html');

var T={
es:{
  barra:[['Únete a Bocado Contigo: <span>50 puntos de regalo</span> y descuentos en cada compra','contigo'],['<span>Juega y gana</span> descuentos para tu próxima compra','juego']],
  barraSocio:['Compra con tu correo de Bocado Contigo y <span>suma puntos</span>','contigo'],
  flot:{contigo:['Bocado Contigo','50 puntos de regalo'],juego:['Juega y gana','Descuentos para tu compra'],cerrar:'Cerrar'},
  shop:{eyebrow:'Antes de ir a la tienda',t:'¿Quieres un descuento para esta compra?',p:'Juega un minuto en «Juega y gana» y llévate un cupón para usar hoy en la tienda online.',si:'Jugar y ganar',no:'No, ir a la tienda',
        club:'¿Aún no eres de Bocado Contigo? <a href="{u}">Únete gratis</a> y esta compra también te sumará puntos.',
        socio:'Recuerda comprar con el correo de Bocado Contigo para sumar puntos.'},
  sal:{eyebrow:'Antes de irte',t:'¿Te unes a Bocado Contigo?',p:'El club de Bocado: gratis y en un minuto.',l:['<b>50 puntos</b> de regalo al unirte','<b>1 punto por cada euro</b> que compras en la tienda online','Cada 100 puntos, <b>5 € de descuento</b>','<b>Primicias</b> de cada lanzamiento'],si:'Quiero mi tarjeta',no:'Ahora no'}
},
ca:{
  barra:[['Uneix-te a Bocado Contigo: <span>50 punts de regal</span> i descomptes a cada compra','contigo'],['<span>Juga i guanya</span> descomptes per a la teva propera compra','juego']],
  barraSocio:['Compra amb el teu correu de Bocado Contigo i <span>suma punts</span>','contigo'],
  flot:{contigo:['Bocado Contigo','50 punts de regal'],juego:['Juga i guanya','Descomptes per a la compra'],cerrar:'Tancar'},
  shop:{eyebrow:'Abans d’anar a la botiga',t:'Vols un descompte per a aquesta compra?',p:'Juga un minut a «Juga i guanya» i emporta’t un cupó per fer servir avui a la botiga en línia.',si:'Jugar i guanyar',no:'No, anar a la botiga',
        club:'Encara no ets de Bocado Contigo? <a href="{u}">Uneix-t’hi gratis</a> i aquesta compra també et sumarà punts.',
        socio:'Recorda comprar amb el correu de Bocado Contigo per sumar punts.'},
  sal:{eyebrow:'Abans de marxar',t:'T’uneixes a Bocado Contigo?',p:'El club de Bocado: gratis i en un minut.',l:['<b>50 punts</b> de regal en unir-t’hi','<b>1 punt per cada euro</b> que compres a la botiga en línia','Cada 100 punts, <b>5 € de descompte</b>','<b>Primícies</b> de cada llançament'],si:'Vull la meva targeta',no:'Ara no'}
}}[L];

/* ---------- utilidades ---------- */
function get(k,s){try{return (s?sessionStorage:localStorage).getItem(k)}catch(e){return null}}
function put(k,v,s){try{(s?sessionStorage:localStorage).setItem(k,v)}catch(e){}}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}
var esSocio=!!(function(){try{var x=JSON.parse(localStorage.getItem('bocadoContigoSesion'));return x&&x.codigo}catch(e){return null}})()||!!get('bocadoContigoSocio');
var hoy=new Date().toDateString();
var yaGanoTodo=['catch','mem','quiz'].every(function(g){return get('bocado_win_'+g)===hoy});
function rechazado(k){var t=+get('bocadoPromo_no_'+k)||0;return Date.now()-t<CFG.diasTrasRechazo*864e5}
function rechazar(k){put('bocadoPromo_no_'+k,String(Date.now()))}
function visto(k){return get('bocadoPromo_v_'+k,true)==='1'}
function marcar(k){put('bocadoPromo_v_'+k,'1',true)}
var paginas=(+get('bocadoPromo_pag',true)||0)+1;put('bocadoPromo_pag',String(paginas),true);
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- estilos ---------- */
var RING='<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-dasharray="180 47" transform="rotate(-20 50 50)"/></svg>';
var css=el('style',null,
'.bp-bar a{color:inherit;text-decoration:none}.bp-bar a:hover{text-decoration:underline}.bp-bar span{color:var(--coral,#eb5b4f)}'+
'.bp-fade{transition:opacity .35s}.bp-fade.out{opacity:0}'+
'.bp-pill{position:fixed;left:max(16px,env(safe-area-inset-left,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:850;display:flex;align-items:center;gap:10px;background:#111;color:#fff;border-radius:999px;padding:8px 10px 8px 8px;box-shadow:0 10px 30px -8px rgba(0,0,0,.45);font-family:inherit;max-width:calc(100vw - 32px);transform:translateY(140%);transition:transform .45s cubic-bezier(.2,.9,.3,1.2)}'+
'.bp-pill.on{transform:none}.bp-pill a{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;min-width:0}'+
'.bp-pill .bp-ic{flex:none;width:40px;height:40px;border-radius:50%;background:var(--red,#d42a25);display:grid;place-items:center;color:#fff}.bp-pill .bp-ic svg{width:24px;height:24px}'+
'.bp-pill .bp-ic.j{background:var(--coral,#eb5b4f)}.bp-pill b{display:block;font-size:15px;line-height:1.1;white-space:nowrap}.bp-pill small{display:block;font-size:12.5px;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
'.bp-pill .bp-x{flex:none;width:30px;height:30px;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;font-size:18px;line-height:1;cursor:pointer}'+
'.bp-pill .bp-txt{min-width:0;transition:opacity .3s}.bp-pill .bp-txt.out{opacity:0}'+
'.bp-ov{position:fixed;inset:0;z-index:1000;background:rgba(17,17,17,.55);display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;transition:opacity .25s}.bp-ov.on{opacity:1}'+
'.bp-dlg{position:relative;width:100%;max-width:460px;background:#fff;color:#111;border-radius:22px;overflow:hidden;box-shadow:0 30px 70px -20px rgba(0,0,0,.5);transform:translateY(16px) scale(.98);transition:transform .3s;font-family:inherit;max-height:calc(100vh - 32px);overflow-y:auto}.bp-ov.on .bp-dlg{transform:none}'+
'.bp-top{position:relative;background:#111;color:#fff;padding:26px 26px 22px;overflow:hidden}.bp-top.j{background:var(--red,#d42a25)}'+
'.bp-top svg.bp-ring{position:absolute;right:-34px;top:-34px;width:150px;height:150px;color:var(--red,#d42a25);opacity:.95}.bp-top.j svg.bp-ring{color:#fff;opacity:.18}'+
'.bp-ey{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;opacity:.75;margin:0 0 8px;position:relative}'+
'.bp-top h2{position:relative;margin:0;font-size:28px;line-height:1.08;font-weight:900;max-width:300px;text-wrap:balance}'+
'.bp-body{padding:20px 26px 24px}.bp-body p{margin:0 0 14px;line-height:1.55;font-size:16px;color:#333}'+
'.bp-body ul{list-style:none;margin:0 0 18px;padding:0;display:grid;gap:9px}.bp-body li{display:flex;gap:10px;align-items:flex-start;font-size:15.5px;line-height:1.4}'+
'.bp-body li:before{content:"";flex:none;width:10px;height:10px;margin-top:5px;border-radius:50%;border:2.5px solid var(--red,#d42a25)}'+
'.bp-acts{display:flex;flex-direction:column;gap:10px}.bp-acts .btn{width:100%}'+
'.bp-btn{display:flex;align-items:center;justify-content:center;min-height:50px;border-radius:999px;font:inherit;font-size:16px;font-weight:700;text-decoration:none;cursor:pointer;border:1.5px solid #111;background:#111;color:#fff;padding:0 22px}'+
'.bp-btn.r{background:var(--red,#d42a25);border-color:var(--red,#d42a25)}.bp-btn.g{background:#fff;color:#111}'+
'.bp-note{margin:14px 0 0!important;font-size:14px!important;color:#5c5852!important}.bp-note a{color:#111;font-weight:700}'+
'.bp-close{position:absolute;top:12px;right:12px;z-index:2;width:36px;height:36px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:22px;line-height:1;cursor:pointer}'+
'.bp-btn:focus-visible,.bp-close:focus-visible,.bp-pill a:focus-visible,.bp-x:focus-visible{outline:3px solid var(--coral,#eb5b4f);outline-offset:2px}'+
'@media (max-width:520px){.bp-top h2{font-size:24px}.bp-pill small{max-width:46vw}}'+
'@media (prefers-reduced-motion:reduce){.bp-pill,.bp-ov,.bp-dlg,.bp-fade,.bp-txt{transition:none!important}}');
document.head.appendChild(css);

/* ---------- ventana (modal) ---------- */
var abierto=null;
function hayOtraVentana(){return abierto||document.querySelector('.jg-modal:not([hidden]),.jg-ov:not([hidden]),[role="dialog"][aria-modal="true"]:not(.bp-dlg)')}
function modal(o){
  if(hayOtraVentana())return false;
  var prev=document.activeElement;
  var ov=el('div','bp-ov'),d=el('div','bp-dlg');d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','bp-t');
  d.innerHTML='<button class="bp-close" type="button" aria-label="'+T.flot.cerrar+'">×</button>'+
    '<div class="bp-top'+(o.juego?' j':'')+'">'+RING.replace('<svg','<svg class="bp-ring"')+'<p class="bp-ey">'+o.eyebrow+'</p><h2 id="bp-t">'+o.t+'</h2></div>'+
    '<div class="bp-body">'+o.body+'<div class="bp-acts"><a class="bp-btn r" href="'+o.siHref+'" data-si>'+o.si+'</a><button class="bp-btn g" type="button" data-no>'+o.no+'</button></div>'+(o.note?'<p class="bp-note">'+o.note+'</p>':'')+'</div>';
  ov.appendChild(d);document.body.appendChild(ov);abierto=ov;
  requestAnimationFrame(function(){ov.classList.add('on')});
  function cerrar(motivo){if(!abierto)return;document.removeEventListener('keydown',key);ov.classList.remove('on');setTimeout(function(){ov.remove()},reduce?0:250);abierto=null;if(prev&&prev.focus)try{prev.focus()}catch(e){}if(o.alCerrar)o.alCerrar(motivo)}
  function key(e){if(e.key==='Escape')cerrar('esc');if(e.key==='Tab'){var f=d.querySelectorAll('a,button');var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}}
  document.addEventListener('keydown',key);
  ov.addEventListener('click',function(e){if(e.target===ov)cerrar('fuera')});
  d.querySelector('.bp-close').onclick=function(){cerrar('x')};
  d.querySelector('[data-no]').onclick=function(){cerrar('no')};
  d.querySelector('[data-si]').addEventListener('click',function(){if(o.alSi)o.alSi()});
  setTimeout(function(){d.querySelector('[data-si]').focus()},60);
  return true;
}

/* ---------- 1. barra superior ---------- */
(function(){
  var bar=document.querySelector('.announce');if(!bar)return;
  var msgs=[[bar.innerHTML,null]];
  var c=esSocio?T.barraSocio:T.barra[0];
  if(!EN_CONTIGO)msgs.push([c[0],URL_CONTIGO+(esSocio?'':'#unete')]);
  if(!EN_JUEGO&&!yaGanoTodo)msgs.push([T.barra[1][0],URL_JUEGO]);
  if(msgs.length<2)return;
  bar.classList.add('bp-bar');
  var inner=el('div','bp-fade');inner.innerHTML=bar.innerHTML;bar.innerHTML='';bar.appendChild(inner);bar.setAttribute('aria-live','off');
  var i=0;
  function show(){var m=msgs[i];inner.innerHTML=m[1]?'<a href="'+m[1]+'">'+m[0]+' →</a>':m[0]}
  setInterval(function(){
    if(document.hidden||bar.matches(':hover'))return;
    i=(i+1)%msgs.length;
    if(reduce){show();return}
    inner.classList.add('out');setTimeout(function(){show();inner.classList.remove('out')},350);
  },CFG.rotarCada);
})();

/* ---------- 2. botón flotante ---------- */
(function(){
  if(get('bocadoPromo_pill',true)==='0')return;
  var items=[];
  if(!esSocio&&!EN_CONTIGO)items.push({k:'contigo',h:URL_CONTIGO+'#unete',ic:'',t:T.flot.contigo});
  if(!yaGanoTodo&&!EN_JUEGO)items.push({k:'juego',h:URL_JUEGO,ic:' j',t:T.flot.juego});
  if(!items.length)return;
  var p=el('div','bp-pill');p.setAttribute('role','complementary');p.setAttribute('aria-label','Bocado');
  var a=el('a');var ic=el('span','bp-ic');ic.innerHTML=RING;var tx=el('span','bp-txt');a.appendChild(ic);a.appendChild(tx);
  var x=el('button','bp-x','×');x.type='button';x.setAttribute('aria-label',T.flot.cerrar);
  p.appendChild(a);p.appendChild(x);
  var i=0;function pon(){var it=items[i];a.href=it.h;ic.className='bp-ic'+it.ic;tx.innerHTML='<b>'+it.t[0]+'</b><small>'+it.t[1]+'</small>'}
  pon();
  x.onclick=function(){p.classList.remove('on');put('bocadoPromo_pill','0',true);setTimeout(function(){p.remove()},500)};
  var mostrado=false;
  function mostrar(){if(mostrado)return;mostrado=true;document.body.appendChild(p);requestAnimationFrame(function(){requestAnimationFrame(function(){p.classList.add('on')})});
    if(items.length>1)setInterval(function(){if(document.hidden||p.matches(':hover'))return;i=(i+1)%items.length;if(reduce){pon();return}tx.classList.add('out');setTimeout(function(){pon();tx.classList.remove('out')},300)},7000)}
  setTimeout(mostrar,CFG.flotanteTras);
  window.addEventListener('scroll',function(){var h=document.documentElement;if((h.scrollTop+innerHeight)/h.scrollHeight>.35)mostrar()},{passive:true});
})();

/* ---------- 3. al ir a la tienda: ¿jugar antes? ---------- */
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href*="'+CFG.shop+'"]');
  if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  if(EN_JUEGO||yaGanoTodo||visto('shop')||rechazado('shop'))return;
  e.preventDefault();
  var destino=a.href,nueva=a.target==='_blank';
  var ir=function(){if(nueva)window.open(destino,'_blank','noopener');else location.href=destino};
  marcar('shop');
  var ok=modal({juego:true,eyebrow:T.shop.eyebrow,t:T.shop.t,body:'<p>'+T.shop.p+'</p>',si:T.shop.si,siHref:URL_JUEGO,no:T.shop.no,
    note:esSocio?T.shop.socio:T.shop.club.replace('{u}',URL_CONTIGO+'#unete'),
    alCerrar:function(m){if(m==='no'){rechazar('shop');ir()}}});
  if(!ok)ir();
},true);

/* ---------- 4. al salir: ¿te unes a Bocado Contigo? ---------- */
(function(){
  if(esSocio||EN_CONTIGO||EN_JUEGO||/\/legal\//.test(PATH))return;
  var inicio=Date.now();
  function puede(){return !visto('salida')&&!rechazado('salida')&&Date.now()-inicio>CFG.salidaMinimo&&!hayOtraVentana()}
  function lanzar(){
    if(!puede())return;
    marcar('salida');
    modal({eyebrow:T.sal.eyebrow,t:T.sal.t,body:'<p>'+T.sal.p+'</p><ul>'+T.sal.l.map(function(x){return '<li><span>'+x+'</span></li>'}).join('')+'</ul>',
      si:T.sal.si,siHref:URL_CONTIGO+'#unete',no:T.sal.no,alCerrar:function(m){if(m==='no'||m==='x')rechazar('salida')}});
  }
  var conRaton=window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(conRaton){
    document.addEventListener('mouseout',function(e){if(!e.relatedTarget&&e.clientY<=0)lanzar()});
  }else{
    // móvil: no se puede saber cuándo se va; se muestra tras un rato de visita si ha visto más de una página
    // o cuando sube rápido hasta arriba después de haber leído (gesto típico antes de salir)
    setTimeout(function(){if(paginas>=2)lanzar()},CFG.salidaMovil);
    var maxY=0,lastY=0,lastT=0;
    window.addEventListener('scroll',function(){var y=window.scrollY,t=Date.now();maxY=Math.max(maxY,y);
      if(lastT&&y<lastY&&(lastY-y)/(t-lastT)>2.5&&y<300&&maxY>innerHeight*1.5)lanzar();lastY=y;lastT=t},{passive:true});
  }
})();
})();
