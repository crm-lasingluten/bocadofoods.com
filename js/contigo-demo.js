/* Bocado Contigo · MODO DEMOSTRACIÓN
   Imita en el navegador (localStorage) las funciones de Supabase de bocado-contigo.sql
   para poder probar la web y el panel sin base de datos. No se usa en producción. */
(function(){
var KEY='bocadoContigoDemo';
function seed(){
  var now=Date.now(), d=864e5;
  var a={id:'a1',codigo:'BC-7K4P9M',nombre:'Laura',apellidos:'Martín',email:'laura@ejemplo.com',telefono:'',primicias:true,activo:true,created_at:new Date(now-60*d).toISOString()};
  return {seq:10,
    reglas:{puntos_por_euro:1,puntos_por_euro_dto:20,canje_minimo:100,bienvenida:50,bonus_cumple:50,factor_compra_min:2,cupon_validez_dias:90,caducidad_meses:12,multiplicador:1,
      primicia_nombre:'Protein Bagel Soft',primicia_texto:'Este mes, con tu pedido te llega una muestra del nuevo Protein Bagel Soft antes de que salga a la venta.'},
    afiliados:[a],
    movs:[
      {id:1,afiliado_id:'a1',tipo:'bienvenida',puntos:50,nota:'Regalo de bienvenida',created_at:new Date(now-60*d).toISOString()},
      {id:2,afiliado_id:'a1',tipo:'compra',puntos:64,importe:64.90,pedido:'XKBRLMQSW',created_at:new Date(now-41*d).toISOString()},
      {id:3,afiliado_id:'a1',tipo:'compra',puntos:72,importe:72.40,pedido:'PZTNHAVGE',created_at:new Date(now-9*d).toISOString()}],
    canjes:[]};
}
function load(){try{var s=JSON.parse(localStorage.getItem(KEY));if(s&&s.reglas)return s}catch(e){}return seed()}
var DB=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){}}
function norm(c){var x=String(c||'').toUpperCase().replace(/[^A-Z0-9]/g,'');return x.length>=8&&x.slice(0,2)==='BC'?'BC-'+x.slice(2):x}
function saldo(id){return DB.movs.filter(function(m){return m.afiliado_id===id}).reduce(function(s,m){return s+m.puntos},0)}
function find(c,e){e=String(e||'').trim().toLowerCase();return DB.afiliados.filter(function(a){return a.activo&&a.codigo===norm(c)&&a.email===e})[0]}
function ref(r){r=String(r||'').trim();return DB.afiliados.filter(function(a){return a.codigo===norm(r)||a.email===r.toLowerCase()})[0]}
function mov(o){o.id=++DB.seq;o.created_at=new Date().toISOString();DB.movs.push(o)}
function cap(s){return String(s||'').trim().toLowerCase().replace(/(^|\s)\S/g,function(t){return t.toUpperCase()})}
function reglasPub(){var r=DB.reglas;return {puntos_por_euro:r.puntos_por_euro,puntos_por_euro_dto:r.puntos_por_euro_dto,canje_minimo:r.canje_minimo,bienvenida:r.bienvenida,bonus_cumple:r.bonus_cumple,factor_compra_min:r.factor_compra_min,cupon_validez_dias:r.cupon_validez_dias,multiplicador:r.multiplicador}}
function iso(d){return d.toISOString().slice(0,10)}

var F={
  contigo_reglas_publicas:function(){return reglasPub()},
  contigo_alta:function(p){
    var e=String(p.p_email||'').trim().toLowerCase();
    if(!p.p_acepta)return{ok:false,error:'condiciones'};
    if(String(p.p_nombre||'').trim().length<2)return{ok:false,error:'nombre'};
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(e))return{ok:false,error:'email'};
    if(DB.afiliados.some(function(a){return a.email===e}))return{ok:false,error:'ya_registrado'};
    var abc='23456789ABCDEFGHJKLMNPQRSTUVWXYZ',c;
    do{c='BC-';for(var i=0;i<6;i++)c+=abc[Math.floor(Math.random()*32)]}while(DB.afiliados.some(function(a){return a.codigo===c}));
    var a={id:'a'+(++DB.seq),codigo:c,nombre:cap(p.p_nombre),apellidos:cap(p.p_apellidos),email:e,telefono:p.p_telefono||'',primicias:p.p_primicias!==false,activo:true,created_at:new Date().toISOString()};
    DB.afiliados.push(a);
    if(DB.reglas.bienvenida>0)mov({afiliado_id:a.id,tipo:'bienvenida',puntos:DB.reglas.bienvenida,nota:'Regalo de bienvenida'});
    save();return{ok:true,codigo:a.codigo,nombre:a.nombre,apellidos:a.apellidos,email:a.email,alta:a.created_at,saldo:saldo(a.id)};
  },
  contigo_consulta:function(p){
    var a=find(p.p_codigo,p.p_email);if(!a)return{ok:false,error:'no_encontrado'};var r=DB.reglas;
    return{ok:true,codigo:a.codigo,nombre:a.nombre,apellidos:a.apellidos,email:a.email,alta:a.created_at,primicias:a.primicias,saldo:saldo(a.id),reglas:reglasPub(),
      primicia:a.primicias&&r.primicia_nombre?{nombre:r.primicia_nombre,texto:r.primicia_texto}:null,
      movimientos:DB.movs.filter(function(m){return m.afiliado_id===a.id}).slice().reverse().slice(0,30),
      canjes:DB.canjes.filter(function(c){return c.afiliado_id===a.id}).slice().reverse().slice(0,10).map(function(c){
        return{id:c.id,puntos:c.puntos,euros:c.euros,cupon:(c.estado==='activo'||c.estado==='usado')?c.cupon:null,compra_minima:c.compra_minima,caduca:c.caduca,estado:c.estado,created_at:c.created_at}})};
  },
  contigo_canjear:function(p){
    var a=find(p.p_codigo,p.p_email),r=DB.reglas,pts=parseInt(p.p_puntos,10);if(!a)return{ok:false,error:'no_encontrado'};
    if(DB.canjes.some(function(c){return c.afiliado_id===a.id&&c.estado==='pendiente'}))return{ok:false,error:'canje_pendiente'};
    if(!pts||pts<r.canje_minimo)return{ok:false,error:'minimo',minimo:r.canje_minimo};
    if(pts%r.puntos_por_euro_dto)return{ok:false,error:'multiplo',multiplo:r.puntos_por_euro_dto};
    var s=saldo(a.id);if(pts>s)return{ok:false,error:'saldo',saldo:s};
    var eur=pts/r.puntos_por_euro_dto,n=DB.canjes.filter(function(c){return c.afiliado_id===a.id}).length+1;
    var c={id:++DB.seq,afiliado_id:a.id,puntos:pts,euros:eur,cupon:'CONTIGO-'+a.codigo.slice(3)+'-'+n,compra_minima:eur*r.factor_compra_min,
      caduca:iso(new Date(Date.now()+r.cupon_validez_dias*864e5)),estado:'pendiente',created_at:new Date().toISOString()};
    DB.canjes.push(c);mov({afiliado_id:a.id,tipo:'canje',puntos:-pts,canje_id:c.id,nota:'Canje por cupón de '+eur+' €'});save();
    return{ok:true,canje_id:c.id,cupon:c.cupon,puntos:pts,euros:eur,compra_minima:c.compra_minima,caduca:c.caduca,saldo:saldo(a.id),nombre:a.nombre,apellidos:a.apellidos,email:a.email,codigo:a.codigo};
  },
  /* panel interno */
  contigo_admin_compra:function(p){
    var a=ref(p.p_ref),r=DB.reglas,imp=parseFloat(p.p_importe);if(!a)return{ok:false,error:'no_encontrado'};
    if(!String(p.p_pedido||'').trim()||!(imp>0))return{ok:false,error:'datos'};
    if(DB.movs.some(function(m){return m.tipo==='compra'&&m.pedido===String(p.p_pedido).trim()}))return{ok:false,error:'pedido_duplicado'};
    var pts=Math.floor(imp*r.puntos_por_euro*r.multiplicador);
    mov({afiliado_id:a.id,tipo:'compra',puntos:pts,importe:imp,pedido:String(p.p_pedido).trim(),nota:p.p_nota||(r.multiplicador>1?'Puntos ×'+r.multiplicador:null)});save();
    return{ok:true,puntos:pts,saldo:saldo(a.id),nombre:a.nombre+' '+a.apellidos,primicias:a.primicias,primicia:r.primicia_nombre};
  },
  contigo_admin_ajuste:function(p){
    var a=ref(p.p_ref),pts=parseInt(p.p_puntos,10);if(['bonus','ajuste'].indexOf(p.p_tipo)<0||!pts)return{ok:false,error:'datos'};
    if(!a)return{ok:false,error:'no_encontrado'};if(saldo(a.id)+pts<0)return{ok:false,error:'saldo'};
    mov({afiliado_id:a.id,tipo:p.p_tipo,puntos:pts,nota:p.p_nota});save();return{ok:true,saldo:saldo(a.id)};
  },
  contigo_admin_activar:function(p){var c=DB.canjes.filter(function(c){return c.id==p.p_canje&&c.estado==='pendiente'})[0];if(!c)return{ok:false,error:'estado'};c.estado='activo';c.activado_at=new Date().toISOString();save();return{ok:true,cupon:c.cupon}},
  contigo_admin_usado:function(p){var c=DB.canjes.filter(function(c){return c.id==p.p_canje&&c.estado==='activo'})[0];if(!c)return{ok:false,error:'estado'};c.estado='usado';save();return{ok:true}},
  contigo_admin_anular:function(p){var c=DB.canjes.filter(function(c){return c.id==p.p_canje&&(c.estado==='pendiente'||c.estado==='activo')})[0];if(!c)return{ok:false,error:'estado'};
    c.estado='anulado';c.nota=p.p_motivo;mov({afiliado_id:c.afiliado_id,tipo:'reintegro',puntos:c.puntos,canje_id:c.id,nota:'Canje anulado'+(p.p_motivo?': '+p.p_motivo:'')});save();return{ok:true}},
  contigo_admin_reglas:function(p){var r=DB.reglas;if(p.p.multiplicador!=null)r.multiplicador=parseFloat(p.p.multiplicador)||1;
    if('primicia_nombre' in p.p)r.primicia_nombre=p.p.primicia_nombre||null;if('primicia_texto' in p.p)r.primicia_texto=p.p.primicia_texto||null;save();
    var o=reglasPub();o.primicia_nombre=r.primicia_nombre;o.primicia_texto=r.primicia_texto;return o}
};

window.BocadoContigoDemo={
  rpc:function(name,params){return new Promise(function(ok,ko){setTimeout(function(){try{DB=load();ok(F[name](params||{}))}catch(e){ko(e)}},250)})},
  /* lecturas del panel (equivalen a las vistas contigo_resumen y contigo_canjes_vista) */
  resumen:function(q){DB=load();q=String(q||'').toLowerCase();return Promise.resolve(DB.afiliados.filter(function(a){
      return !q||(a.nombre+' '+a.apellidos+' '+a.email+' '+a.codigo).toLowerCase().indexOf(q)>=0}).map(function(a){
      var ms=DB.movs.filter(function(m){return m.afiliado_id===a.id});
      return{id:a.id,codigo:a.codigo,nombre:a.nombre,apellidos:a.apellidos,email:a.email,telefono:a.telefono,primicias:a.primicias,created_at:a.created_at,saldo:saldo(a.id),
        total_compras:ms.filter(function(m){return m.tipo==='compra'}).reduce(function(s,m){return s+m.importe},0),
        ultima_compra:(ms.filter(function(m){return m.tipo==='compra'}).pop()||{}).created_at||null}}).reverse())},
  canjes:function(estados){DB=load();return Promise.resolve(DB.canjes.filter(function(c){return estados.indexOf(c.estado)>=0}).map(function(c){
      var a=DB.afiliados.filter(function(x){return x.id===c.afiliado_id})[0]||{};var o={};for(var k in c)o[k]=c[k];o.codigo=a.codigo;o.nombre=a.nombre;o.apellidos=a.apellidos;o.email=a.email;return o}).reverse())},
  movimientos:function(id){DB=load();return Promise.resolve(DB.movs.filter(function(m){return m.afiliado_id===id}).slice().reverse())},
  reglas:function(){DB=load();return Promise.resolve(DB.reglas)},
  reset:function(){DB=seed();save()}
};
})();
