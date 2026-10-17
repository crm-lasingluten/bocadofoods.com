/* Juega y gana · Bocado Functional Foods
   - En cualquier página que cargue este script: el círculo de Bocado cruza la pantalla una vez por visita.
   - En la página que tenga <div id="jg-app">: los tres juegos (Atrapa el Bocado, Memory y Quiz).
   Para cambiar premios o códigos: editar CFG. Para cambiar preguntas: QS. */
(function(){
var S=document.currentScript||{getAttribute:function(){return ''}};
var ROOT=S.getAttribute('data-root')||'';
var COND=S.getAttribute('data-cond')||'';
var PRIV=S.getAttribute('data-priv')||'';
var L=(document.documentElement.lang||'es').slice(0,2);

/* ---------- configuración ---------- */
var CFG={
  shop:'https://shop.bocadofoods.com',
  flyerDelay:[15000,25000],          // ms de navegación antes de que pase el círculo
  supabase:{url:'https://lbbpnnvwtanurtjqgcqv.supabase.co',table:'bocado_juego_emails',
    key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiYnBubnZ3dGFudXJ0anFnY3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjM2NDEsImV4cCI6MjA5MjMzOTY0MX0.a25lrgUlzDM4TSp4c6KOCQ3ERZnSk8-5r2y9DbhRPxg'},
  // Códigos de los cupones: cambiarlos aquí cada mes (y crearlos igual en PrestaShop › Reglas del carrito)
  codes:{flyer:'ATRAPADO5',catch1:'JUEGA5',catch2:'JUEGA10',catch3:'JUEGAENVIO',mem1:'MEMORY5',mem2:'MEMORY10',mem3:'MEMORYENVIO',quiz1:'QUIZ5',quiz2:'QUIZ10'}
};

var T={
es:{
  off5:['5 %','de descuento'],off10:['10 %','de descuento'],ship:['Envío','gratis'],
  copy:'Copiar código',go:'Ir a la tienda',copied:'Código copiado',selectIt:'Selecciónalo y cópialo',
  cond:'Válido hasta final de mes. Un uso por cliente. No acumulable con otras promociones. Envíos a la península.',condMin:'Pedido mínimo 45 €.',condShip:'Sin pedido mínimo.',condLink:'Condiciones',
  gate:{h:'Escribe tu email para ver tu código',ph:'tu@email.com',label:'Correo electrónico',accept:'Acepto las {c}condiciones de la promoción{/} y la {p}política de privacidad{/}.',nl:'Quiero recibir la newsletter de Bocado con recetas, novedades y ofertas.',btn:'Ver mi cupón',sending:'Un momento…',bad:'Revisa el correo electrónico.',need:'Tienes que aceptar las condiciones para ver el cupón.',info:'Responsable: Bauer Lemans, S.L. Finalidad: gestionar la promoción y, si lo marcas, enviarte la newsletter. Derechos: hola@bocadofoods.com.'},
  already:['Ya has ganado hoy','Vuelve mañana para jugar otra vez a este juego.'],
  tabs:['Atrapa el Bocado','Memory Bocado','Quiz nutrición'],tabsLabel:'Juegos',
  flyer:{aria:'Atrapa el círculo de Bocado',h:'¡Lo has atrapado!',p:'Te has ganado un cupón para la tienda online de Bocado.',close:'Seguir navegando',more:'Más juegos'},
  c:{h:'Atrapa el Bocado',lead:'Tienes 20 segundos para atrapar todos los círculos que puedas. Cuantos más atrapes, mayor descuento.',fine:'El círculo coral vale 3.',
     hud:'Atrapados',ready:'¿Preparado?',readyP:'Toca o haz clic en los círculos antes de que se escapen.',play:'Jugar',again:'Jugar otra vez',
     win:'{n} círculos. ¡Premio!',winP:'Usa este código al pagar en la tienda online.',lose:'{n} círculos',loseP:'Te faltan {k} para el primer premio.',ring:'Círculo',gold:'Círculo coral, vale 3',zone:'Zona de juego'},
  m:{h:'Memory Bocado',lead:'Une cada envase con su producto. Tienes 60 segundos para encontrar las 8 parejas. Cuanto antes termines, mejor premio.',
     fine:'El reloj empieza al girar la primera carta. Cada pareja que encuentres te enseña un dato del producto.',hud:'Parejas',
     hint:'Gira dos cartas. Si el envase y el producto coinciden, se quedan boca arriba.',ready:'Memory Bocado',readyP:'Une cada envase con su producto. 8 parejas, 60 segundos.',
     play:'Jugar',again:'Jugar otra vez',timeUp:'¡Se acabó el tiempo!',timeUpP:'Has encontrado {n} de 8 parejas. Ahora ya conoces mejor los envases.',
     win:'¡Lo has hecho en {n} s!',winP:'Usa este código al pagar en la tienda online.',card:'Carta {n} boca abajo',down:'Carta boca abajo',pack:'envase',prod:'producto'},
  q:{h:'¿Cuánto sabes de nutrición?',lead:'Cinco preguntas sobre nutrición y productos Bocado, 12 segundos para cada una. Acierta al menos cuatro para ganar.',
     fine:'Salen 3 fáciles y 2 difíciles de un banco de 40, distintas en cada partida. Los datos nutricionales son por 100 g, según la etiqueta de cada producto.',
     n:'Pregunta {n}/5',ok:'¡Correcto!',no:'No es esa.',timeout:'Se acabó el tiempo.',next:'Siguiente pregunta',result:'Ver resultado',
     win:'{n} de 5. ¡Premio!',winP:'Sabes de nutrición. Usa este código en la tienda online.',lose:'{n} de 5 aciertos',loseP:'Necesitas al menos 4. Las preguntas cambian en cada partida.',
     ready:'¿Cuánto sabes de nutrición?',readyP:'5 preguntas, 12 segundos cada una.',play:'Empezar',again:'Jugar otra vez'},
  rules:{c:[['12+','5 % de descuento'],['24+','10 % de descuento'],['35+','Envío gratis']],m:[['60 s','5 % de descuento'],['45 s','10 % de descuento'],['35 s','Envío gratis']],q:[['4 de 5','5 % de descuento'],['5 de 5','10 % de descuento']]},
  prods:[
    ['the-original-protein-bread','The Original Protein Bread','28 g de proteínas y 5 g de hidratos de carbono por 100 g.'],
    ['wrap-low-carb','Wrap Low Carb','8 tortillas de 40 g por paquete.'],
    ['tostadas-low-carb','Tostadas Low Carb','44 g de proteínas por 100 g.'],
    ['macarrones-proteicos','Macarrones Proteicos','30 g de proteínas y 52 g de fibra por 100 g.'],
    ['protein-bagel','Protein Bagel','3 bagels de 80 g, con 27 g de proteínas por 100 g.'],
    ['sweet-protein-chocolate','Sweet Protein Chocolate','Mezcla para brownies, muffins, bizcochos y tortitas de chocolate, con 20 g de proteínas por 100 g de producto preparado.'],
    ['mezcla-pizza-proteica','Mezcla de Pizza proteica','Masa de pizza para hacer en casa, con 27,3 g de proteínas por 100 g de masa horneada.'],
    ['mezcla-picada-vegetal-150','Mezcla de Picada vegetal','100 % vegana y sin gluten, con proteína de guisante. Con 150 g de mezcla obtienes 450 g de picada.']],
  qs:[
 {d:'f',q:'¿Cuántas proteínas tiene The Original Protein Bread por 100 g?',o:['28 g','8 g','15 g','45 g'],w:'Tiene <b>28 g de proteínas</b> por 100 g, gracias a su mezcla de proteínas vegetales y semillas.'},
 {d:'d',q:'¿Cuál de estos productos Bocado tiene más proteínas por 100 g?',o:['Tostadas Low Carb','Pan IG24','Protein Bagel','Wrap Low Carb'],w:'Las <b>Tostadas Low Carb</b> tienen 44 g de proteínas por 100 g. El Pan IG24 tiene 28 g, el Protein Bagel 27 g y el Wrap 22 g.'},
 {d:'f',q:'¿Qué significan las letras «IG» de la línea IG24?',o:['Índice glucémico','Ingrediente garantizado','Integral y granos','Ingesta general'],w:'IG es el <b>índice glucémico</b>, una escala que indica lo rápido que un alimento con hidratos de carbono eleva la glucosa en sangre.'},
 {d:'f',q:'¿Qué mide el índice glucémico de un alimento?',o:['Lo rápido que eleva la glucosa en sangre','Las calorías que aporta','La cantidad de azúcar añadido','Su contenido en fibra'],w:'Compara la <b>velocidad con la que sube la glucosa en sangre</b> tras comer un alimento frente a un alimento de referencia.'},
 {d:'d',q:'¿Cuántos hidratos de carbono tiene el Pan IG24 por 100 g?',o:['5 g','25 g','45 g','60 g'],w:'Solo <b>5 g de hidratos de carbono</b> por 100 g. Un pan blanco convencional suele rondar los 50 g.'},
 {d:'f',q:'¿Cuál de estos cereales contiene gluten?',o:['Trigo','Arroz','Maíz','Trigo sarraceno'],w:'El <b>trigo</b> contiene gluten. El arroz, el maíz y el trigo sarraceno (que no es un trigo) no lo contienen de forma natural.'},
 {d:'f',q:'¿Cuál de estas proteínas es de origen vegetal?',o:['Proteína de guisante','Suero de leche','Caseína','Albúmina de huevo'],w:'La <b>proteína de guisante</b> es vegetal. Es la que usa nuestra Mezcla de Picada vegetal, 100 % vegana.'},
 {d:'f',q:'¿Qué significa «Low Carb»?',o:['Bajo en hidratos de carbono','Bajo en calorías','Sin carbohidratos','Bajo en grasa'],w:'«Low carb» quiere decir <b>bajo en hidratos de carbono</b>. No significa que no tenga ninguno.'},
 {d:'d',q:'¿Cuántas kcal aporta 1 g de proteínas?',o:['4 kcal','1 kcal','9 kcal','12 kcal'],w:'Cada gramo de proteínas aporta unas <b>4 kcal</b>, igual que los hidratos de carbono. La grasa aporta 9 kcal por gramo.'},
 {d:'f',q:'¿Qué índice glucémico tiene el Pan IG24?',o:['24','55','70','100'],w:'Tiene un <b>índice glucémico de 24</b>, testado. De ahí viene su nombre.'},
 {d:'d',q:'Si preparas el paquete de 150 g de Mezcla de Picada vegetal, ¿cuánta picada obtienes?',o:['450 g','150 g','250 g','1 kg'],w:'Obtienes <b>450 g</b> de picada lista para cocinar: solo hay que hidratarla, dejarla reposar y darle forma.'},
 {d:'d',q:'¿Cuál de estos productos Bocado tiene más fibra por 100 g?',o:['Macarrones Proteicos','Wrap Low Carb','Protein Bagel Soft','Sweet Protein Chocolate'],w:'Los <b>Macarrones Proteicos</b> tienen 52 g de fibra por 100 g.'},
 {d:'f',q:'¿Qué marca del grupo está especializada en productos sin gluten?',o:['La Sin Gluten','IG24','Sweet Protein','Low Carb'],w:'<b>La Sin Gluten</b> es nuestra marca de panes, mezclas y dulces sin gluten.'},
 {d:'f',q:'¿Cuántos panecillos trae una bolsa de Panecillos IG24?',o:['7','5','6','10'],w:'Cada bolsa trae <b>7 panecillos de 50 g</b>, listos para rellenar o tostar.'},
 {d:'f',q:'¿Cuántas tortillas trae un paquete de Wrap Low Carb?',o:['8','4','6','12'],w:'Trae <b>8 tortillas de 40 g</b>, para burritos, fajitas, quesadillas o rollitos fríos.'},
 {d:'d',q:'¿Cuántas proteínas aporta cada tortilla del Wrap Low Carb?',o:['9 g','3 g','15 g','20 g'],w:'Cada tortilla de 40 g aporta <b>9 g de proteínas</b> (22 g por 100 g).'},
 {d:'d',q:'En la UE, ¿cuánto gluten puede tener como máximo un producto etiquetado «sin gluten»?',o:['20 ppm','0 ppm','100 ppm','200 ppm'],w:'El Reglamento (UE) 828/2014 fija un máximo de <b>20 ppm</b> (20 mg de gluten por kg) para usar la mención «sin gluten».'},
 {d:'f',q:'¿Cuál de estos cereales no contiene gluten de forma natural?',o:['Arroz','Cebada','Centeno','Espelta'],w:'El <b>arroz</b> no contiene gluten. La cebada, el centeno y la espelta (una variedad de trigo) sí.'},
 {d:'f',q:'La linaza es la semilla de…',o:['El lino','El girasol','La chía','El sésamo'],w:'La linaza es la <b>semilla del lino</b>. Es uno de los ingredientes principales de nuestro pan proteico.'},
 {d:'d',q:'¿Cuántos alérgenos de declaración obligatoria contiene la Mezcla de Picada vegetal?',o:['Ninguno','1','3','5'],w:'<b>Ninguno</b>: según su etiqueta, no contiene ninguno de los 14 alérgenos de declaración obligatoria.'},
 {d:'d',q:'¿Cuántos alérgenos tienen que indicarse obligatoriamente en el etiquetado de alimentos en la UE?',o:['14','8','10','20'],w:'Son <b>14</b>: entre ellos, cereales con gluten, huevo, leche, soja, frutos de cáscara, sésamo, altramuces y mostaza.'},
 {d:'f',q:'¿Cuál de estos es uno de los alérgenos de declaración obligatoria?',o:['Sésamo','Arroz','Tomate','Maíz'],w:'El <b>sésamo</b> es uno de los 14 alérgenos que deben destacarse en la lista de ingredientes.'},
 {d:'d',q:'¿Qué semilla hay en mayor cantidad en The Original Protein Bread?',o:['Linaza','Girasol','Sésamo','Chía'],w:'La <b>linaza</b> supone un 15 % de la receta, frente al 9 % de girasol y el 2 % de sésamo.'},
 {d:'f',q:'¿Cuántas baguettes trae un paquete de Baguettes Low Carb?',o:['2','1','4','6'],w:'Trae <b>2 baguettes de 110 g</b>, crujientes por fuera y tiernas por dentro.'},
 {d:'f',q:'¿Cuántos panes de 500 g salen con 1 kg de Mezcla de Pan de proteínas?',o:['2','1','4','5'],w:'Con 1 kg de mezcla, levadura y agua obtienes <b>dos panes de 500 g</b>.'},
 {d:'d',q:'¿Cuántos panes de hamburguesa de 75 g salen, aproximadamente, con 1 kg de Mezcla de Pan de hamburguesa?',o:['25','10','15','40'],w:'Salen unas <b>25 piezas de 75 g</b>, perfectas para hamburguesas caseras de carne o vegetales.'},
 {d:'d',q:'¿Cuántos minutos de horno necesitan los Crackers proteicos?',o:['16','5','30','45'],w:'Se extiende la mezcla en una bandeja y en <b>16 minutos</b> están listos.'},
 {d:'f',q:'¿Qué hay que añadir a la Mezcla de Crackers proteicos para prepararlos?',o:['Solo agua','Leche y huevos','Mantequilla','Harina y levadura'],w:'<b>Solo agua</b> y el horno. Así de fácil.'},
 {d:'d',q:'Además de fructosa, ¿qué edulcorante lleva Sweet Protein Chocolate?',o:['Glucósidos de esteviol','Sacarina','Aspartamo','Sucralosa'],w:'Lleva <b>glucósidos de esteviol</b> (E 960), el edulcorante que se obtiene de la planta de stevia.'},
 {d:'f',q:'¿Qué puedes preparar con Sweet Protein Chocolate?',o:['Brownies, muffins y tortitas','Pan de molde','Masa de pizza','Pasta fresca'],w:'Es una mezcla para <b>brownies, muffins, bizcochos y tortitas</b> de chocolate.'},
 {d:'d',q:'¿Cuánta fibra tiene The Original Protein Bread por 100 g?',o:['15 g','3 g','8 g','30 g'],w:'Tiene <b>15 g de fibra</b> por 100 g, gracias a la linaza, el salvado y la fibra de manzana.'},
 {d:'f',q:'¿Cuál de estos productos Bocado es apto para veganos?',o:['Pan IG24','Sweet Protein Chocolate','Protein Chocolate Muffin','Mezcla de Crackers proteicos'],w:'El <b>Pan IG24</b> no lleva leche ni huevo. Los otros tres contienen leche o huevo.'},
 {d:'d',q:'¿Qué tipo de almidón usan los Macarrones Proteicos?',o:['Almidón de tapioca resistente','Almidón de patata','Almidón de maíz','Almidón de arroz'],w:'Se elaboran con <b>almidón de tapioca resistente</b>, proteína de trigo y sémola de trigo duro.'},
 {d:'f',q:'¿Cuál de estos alimentos tiene más proteínas por 100 g?',o:['Pechuga de pollo','Manzana','Arroz cocido','Lechuga'],w:'La <b>pechuga de pollo</b> ronda los 22 g de proteínas por 100 g. La manzana y la lechuga apenas tienen, y el arroz cocido unos 3 g.'},
 {d:'d',q:'¿Cuántas kcal aporta 1 g de grasa?',o:['9 kcal','4 kcal','7 kcal','2 kcal'],w:'La grasa aporta unas <b>9 kcal por gramo</b>, más del doble que las proteínas o los hidratos de carbono (4 kcal).'},
 {d:'f',q:'¿Qué es la fibra alimentaria?',o:['Hidratos de carbono que no se digieren en el intestino delgado','Un tipo de proteína animal','Un tipo de grasa saturada','Una vitamina'],w:'La fibra está formada por <b>hidratos de carbono que el intestino delgado no digiere ni absorbe</b>.'},
 {d:'d',q:'¿Qué ingrediente de la Mezcla para pan sin gluten de La Sin Gluten ayuda a dar estructura a la masa?',o:['Cáscara de psyllium','Gluten de trigo','Levadura química','Clara de huevo'],w:'La <b>cáscara de psyllium</b> retiene agua y da elasticidad a la masa, una función que en el pan normal hace el gluten.'},
 {d:'f',q:'¿Cuánto pesa un Protein Chocolate Muffin?',o:['50 g','30 g','100 g','150 g'],w:'Pesa <b>50 g</b>: formato individual para llevar en el bolso, la mochila o la bolsa del gimnasio.'},
 {d:'d',q:'¿Qué tres proteínas lleva la mezcla de los Panecillos proteicos Low Carb?',o:['Trigo, soja y altramuz','Suero, trigo y huevo','Guisante, arroz y soja','Soja, leche y huevo'],w:'Su mezcla de proteínas combina <b>trigo, soja y altramuz</b>.'},
 {d:'f',q:'¿Qué semillas cubren el Protein Bagel Soft?',o:['Sésamo','Chía','Amapola','Calabaza'],w:'Es un bagel de miga tierna <b>cubierto de sésamo</b>.'}
]
},
ca:{
  off5:['5 %','de descompte'],off10:['10 %','de descompte'],ship:['Enviament','gratuït'],
  copy:'Copiar el codi',go:'Anar a la botiga',copied:'Codi copiat',selectIt:'Selecciona’l i copia’l',
  cond:'Vàlid fins a final de mes. Un ús per client. No acumulable amb altres promocions. Enviaments a la península.',condMin:'Comanda mínima de 45 €.',condShip:'Sense comanda mínima.',condLink:'Condicions',
  gate:{h:'Escriu el teu correu per veure el teu codi',ph:'tu@correu.cat',label:'Correu electrònic',accept:'Accepto les {c}condicions de la promoció{/} i la {p}política de privacitat{/}.',nl:'Vull rebre la newsletter de Bocado amb receptes, novetats i ofertes.',btn:'Veure el meu cupó',sending:'Un moment…',bad:'Revisa el correu electrònic.',need:'Has d’acceptar les condicions per veure el cupó.',info:'Responsable: Bauer Lemans, S.L. Finalitat: gestionar la promoció i, si ho marques, enviar-te la newsletter. Drets: hola@bocadofoods.com.'},
  already:['Ja has guanyat avui','Torna demà per jugar una altra vegada a aquest joc.'],
  tabs:['Atrapa el Bocado','Memory Bocado','Quiz de nutrició'],tabsLabel:'Jocs',
  flyer:{aria:'Atrapa el cercle de Bocado',h:'L’has atrapat!',p:'Has guanyat un cupó per a la botiga en línia de Bocado.',close:'Continuar navegant',more:'Més jocs'},
  c:{h:'Atrapa el Bocado',lead:'Tens 20 segons per atrapar tots els cercles que puguis. Com més n’atrapis, més descompte.',fine:'El cercle coral val 3.',
     hud:'Atrapats',ready:'A punt?',readyP:'Toca o fes clic als cercles abans que s’escapin.',play:'Jugar',again:'Tornar a jugar',
     win:'{n} cercles. Premi!',winP:'Fes servir aquest codi en pagar a la botiga en línia.',lose:'{n} cercles',loseP:'Et falten {k} per al primer premi.',ring:'Cercle',gold:'Cercle coral, val 3',zone:'Zona de joc'},
  m:{h:'Memory Bocado',lead:'Uneix cada envàs amb el seu producte. Tens 60 segons per trobar les 8 parelles. Com més aviat acabis, millor premi.',
     fine:'El rellotge comença quan gires la primera carta. Cada parella que trobis t’ensenya una dada del producte.',hud:'Parelles',
     hint:'Gira dues cartes. Si l’envàs i el producte coincideixen, es queden cap per amunt.',ready:'Memory Bocado',readyP:'Uneix cada envàs amb el seu producte. 8 parelles, 60 segons.',
     play:'Jugar',again:'Tornar a jugar',timeUp:'S’ha acabat el temps!',timeUpP:'Has trobat {n} de 8 parelles. Ara ja coneixes millor els envasos.',
     win:'Ho has fet en {n} s!',winP:'Fes servir aquest codi en pagar a la botiga en línia.',card:'Carta {n} cap per avall',down:'Carta cap per avall',pack:'envàs',prod:'producte'},
  q:{h:'Quant en saps de nutrició?',lead:'Cinc preguntes sobre nutrició i productes Bocado, 12 segons per a cadascuna. Encerta’n almenys quatre per guanyar.',
     fine:'Surten 3 preguntes fàcils i 2 de difícils d’un banc de 40, diferents a cada partida. Les dades nutricionals són per 100 g, segons l’etiqueta de cada producte.',
     n:'Pregunta {n}/5',ok:'Correcte!',no:'No és aquesta.',timeout:'S’ha acabat el temps.',next:'Següent pregunta',result:'Veure el resultat',
     win:'{n} de 5. Premi!',winP:'En saps, de nutrició. Fes servir aquest codi a la botiga en línia.',lose:'{n} de 5 encerts',loseP:'Necessites almenys 4. Les preguntes canvien a cada partida.',
     ready:'Quant en saps de nutrició?',readyP:'5 preguntes, 12 segons cadascuna.',play:'Començar',again:'Tornar a jugar'},
  rules:{c:[['12+','5 % de descompte'],['24+','10 % de descompte'],['35+','Enviament gratuït']],m:[['60 s','5 % de descompte'],['45 s','10 % de descompte'],['35 s','Enviament gratuït']],q:[['4 de 5','5 % de descompte'],['5 de 5','10 % de descompte']]},
  prods:[
    ['the-original-protein-bread','The Original Protein Bread','28 g de proteïnes i 5 g d’hidrats de carboni per 100 g.'],
    ['wrap-low-carb','Wrap Low Carb','8 wraps de 40 g per paquet.'],
    ['tostadas-low-carb','Torrades Low Carb','44 g de proteïnes per 100 g.'],
    ['macarrones-proteicos','Macarrons proteics','30 g de proteïnes i 52 g de fibra per 100 g.'],
    ['protein-bagel','Protein Bagel','3 bagels de 80 g, amb 27 g de proteïnes per 100 g.'],
    ['sweet-protein-chocolate','Sweet Protein Chocolate','Barreja per a brownies, muffins, pastissos i pancakes de xocolata, amb 20 g de proteïnes per 100 g de producte preparat.'],
    ['mezcla-pizza-proteica','Barreja de Pizza proteica','Massa de pizza per fer a casa, amb 27,3 g de proteïnes per 100 g de massa cuita.'],
    ['mezcla-picada-vegetal-150','Barreja de Picada vegetal','100 % vegana i sense gluten, amb proteïna de pèsol. Amb 150 g de barreja obtens 450 g de picada.']],
  qs:[
 {d:'f',q:'Quantes proteïnes té The Original Protein Bread per 100 g?',o:['28 g','8 g','15 g','45 g'],w:'En té <b>28 g de proteïnes</b> per 100 g, gràcies a la seva barreja de proteïnes vegetals i llavors.'},
 {d:'d',q:'Quin d’aquests productes Bocado té més proteïnes per 100 g?',o:['Torrades Low Carb','Pa IG24','Protein Bagel','Wrap Low Carb'],w:'Les <b>Torrades Low Carb</b> tenen 44 g de proteïnes per 100 g. El Pa IG24 en té 28 g, el Protein Bagel 27 g i el Wrap 22 g.'},
 {d:'f',q:'Què volen dir les lletres «IG» de la línia IG24?',o:['Índex glicèmic','Ingredient garantit','Integral i grans','Ingesta general'],w:'IG és l’<b>índex glicèmic</b>, una escala que indica com de ràpid un aliment amb hidrats de carboni eleva la glucosa en sang.'},
 {d:'f',q:'Què mesura l’índex glicèmic d’un aliment?',o:['Com de ràpid eleva la glucosa en sang','Les calories que aporta','La quantitat de sucre afegit','El seu contingut de fibra'],w:'Compara la <b>velocitat amb què puja la glucosa en sang</b> després de menjar un aliment respecte d’un aliment de referència.'},
 {d:'d',q:'Quants hidrats de carboni té el Pa IG24 per 100 g?',o:['5 g','25 g','45 g','60 g'],w:'Només <b>5 g d’hidrats de carboni</b> per 100 g. Un pa blanc convencional sol rondar els 50 g.'},
 {d:'f',q:'Quin d’aquests cereals conté gluten?',o:['Blat','Arròs','Blat de moro','Fajol'],w:'El <b>blat</b> conté gluten. L’arròs, el blat de moro i el fajol (que no és un blat) no en contenen de manera natural.'},
 {d:'f',q:'Quina d’aquestes proteïnes és d’origen vegetal?',o:['Proteïna de pèsol','Sèrum de llet','Caseïna','Albúmina d’ou'],w:'La <b>proteïna de pèsol</b> és vegetal. És la que fa servir la nostra Barreja de Picada vegetal, 100 % vegana.'},
 {d:'f',q:'Què vol dir «Low Carb»?',o:['Baix en hidrats de carboni','Baix en calories','Sense carbohidrats','Baix en greix'],w:'«Low carb» vol dir <b>baix en hidrats de carboni</b>. No vol dir que no en tingui cap.'},
 {d:'d',q:'Quantes kcal aporta 1 g de proteïnes?',o:['4 kcal','1 kcal','9 kcal','12 kcal'],w:'Cada gram de proteïnes aporta unes <b>4 kcal</b>, igual que els hidrats de carboni. El greix n’aporta 9 per gram.'},
 {d:'f',q:'Quin índex glicèmic té el Pa IG24?',o:['24','55','70','100'],w:'Té un <b>índex glicèmic de 24</b>, testat. D’aquí ve el seu nom.'},
 {d:'d',q:'Si prepares el paquet de 150 g de Barreja de Picada vegetal, quanta picada obtens?',o:['450 g','150 g','250 g','1 kg'],w:'Obtens <b>450 g</b> de picada a punt per cuinar: només cal hidratar-la, deixar-la reposar i donar-li forma.'},
 {d:'d',q:'Quin d’aquests productes Bocado té més fibra per 100 g?',o:['Macarrons proteics','Wrap Low Carb','Protein Bagel Soft','Sweet Protein Chocolate'],w:'Els <b>Macarrons proteics</b> tenen 52 g de fibra per 100 g.'},
 {d:'f',q:'Quina marca del grup està especialitzada en productes sense gluten?',o:['La Sin Gluten','IG24','Sweet Protein','Low Carb'],w:'<b>La Sin Gluten</b> és la nostra marca de pans, barreges i dolços sense gluten.'},
 {d:'f',q:'Quants panets porta una bossa de Panets IG24?',o:['7','5','6','10'],w:'Cada bossa porta <b>7 panets de 50 g</b>, a punt per farcir o torrar.'},
 {d:'f',q:'Quants wraps porta un paquet de Wrap Low Carb?',o:['8','4','6','12'],w:'En porta <b>8 de 40 g</b>, per a burritos, fajites, quesadilles o rotllets freds.'},
 {d:'d',q:'Quantes proteïnes aporta cada wrap del Wrap Low Carb?',o:['9 g','3 g','15 g','20 g'],w:'Cada wrap de 40 g aporta <b>9 g de proteïnes</b> (22 g per 100 g).'},
 {d:'d',q:'A la UE, quant gluten pot tenir com a màxim un producte etiquetat «sense gluten»?',o:['20 ppm','0 ppm','100 ppm','200 ppm'],w:'El Reglament (UE) 828/2014 fixa un màxim de <b>20 ppm</b> (20 mg de gluten per kg) per fer servir la menció «sense gluten».'},
 {d:'f',q:'Quin d’aquests cereals no conté gluten de manera natural?',o:['Arròs','Ordi','Sègol','Espelta'],w:'L’<b>arròs</b> no conté gluten. L’ordi, el sègol i l’espelta (una varietat de blat) sí que en contenen.'},
 {d:'f',q:'La llinosa és la llavor…',o:['Del lli','Del gira-sol','De la xia','Del sèsam'],w:'La llinosa és la <b>llavor del lli</b>. És un dels ingredients principals del nostre pa proteic.'},
 {d:'d',q:'Quants al·lèrgens de declaració obligatòria conté la Barreja de Picada vegetal?',o:['Cap','1','3','5'],w:'<b>Cap</b>: segons la seva etiqueta, no conté cap dels 14 al·lèrgens de declaració obligatòria.'},
 {d:'d',q:'Quants al·lèrgens s’han d’indicar obligatòriament a l’etiquetatge dels aliments a la UE?',o:['14','8','10','20'],w:'Són <b>14</b>: entre d’altres, cereals amb gluten, ou, llet, soja, fruits de closca, sèsam, tramussos i mostassa.'},
 {d:'f',q:'Quin d’aquests és un dels al·lèrgens de declaració obligatòria?',o:['Sèsam','Arròs','Tomàquet','Blat de moro'],w:'El <b>sèsam</b> és un dels 14 al·lèrgens que s’han de destacar a la llista d’ingredients.'},
 {d:'d',q:'Quina llavor hi ha en més quantitat a The Original Protein Bread?',o:['Llinosa','Gira-sol','Sèsam','Xia'],w:'La <b>llinosa</b> representa un 15 % de la recepta, davant del 9 % de gira-sol i el 2 % de sèsam.'},
 {d:'f',q:'Quantes baguets porta un paquet de Baguets Low Carb?',o:['2','1','4','6'],w:'Porta <b>2 baguets de 110 g</b>, cruixents per fora i tendres per dins.'},
 {d:'f',q:'Quants pans de 500 g surten amb 1 kg de Barreja de Pa de proteïnes?',o:['2','1','4','5'],w:'Amb 1 kg de barreja, llevat i aigua obtens <b>dos pans de 500 g</b>.'},
 {d:'d',q:'Quants pans d’hamburguesa de 75 g surten, aproximadament, amb 1 kg de Barreja de Pa d’hamburguesa?',o:['25','10','15','40'],w:'Surten unes <b>25 peces de 75 g</b>, perfectes per a hamburgueses casolanes de carn o vegetals.'},
 {d:'d',q:'Quants minuts de forn necessiten els Crackers proteics?',o:['16','5','30','45'],w:'S’estén la barreja en una safata i en <b>16 minuts</b> són a punt.'},
 {d:'f',q:'Què cal afegir a la Barreja de Crackers proteics per preparar-los?',o:['Només aigua','Llet i ous','Mantega','Farina i llevat'],w:'<b>Només aigua</b> i el forn. Així de fàcil.'},
 {d:'d',q:'A més de fructosa, quin edulcorant porta Sweet Protein Chocolate?',o:['Glucòsids d’esteviol','Sacarina','Aspartam','Sucralosa'],w:'Porta <b>glucòsids d’esteviol</b> (E 960), l’edulcorant que s’obté de la planta d’estèvia.'},
 {d:'f',q:'Què pots preparar amb Sweet Protein Chocolate?',o:['Brownies, muffins i pancakes','Pa de motlle','Massa de pizza','Pasta fresca'],w:'És una barreja per a <b>brownies, muffins, pastissos i pancakes</b> de xocolata.'},
 {d:'d',q:'Quanta fibra té The Original Protein Bread per 100 g?',o:['15 g','3 g','8 g','30 g'],w:'Té <b>15 g de fibra</b> per 100 g, gràcies a la llinosa, el segó i la fibra de poma.'},
 {d:'f',q:'Quin d’aquests productes Bocado és apte per a vegans?',o:['Pa IG24','Sweet Protein Chocolate','Protein Chocolate Muffin','Barreja de Crackers proteics'],w:'El <b>Pa IG24</b> no porta llet ni ou. Els altres tres contenen llet o ou.'},
 {d:'d',q:'Quin tipus de midó fan servir els Macarrons proteics?',o:['Midó de tapioca resistent','Midó de patata','Midó de blat de moro','Midó d’arròs'],w:'S’elaboren amb <b>midó de tapioca resistent</b>, proteïna de blat i sèmola de blat dur.'},
 {d:'f',q:'Quin d’aquests aliments té més proteïnes per 100 g?',o:['Pit de pollastre','Poma','Arròs bullit','Enciam'],w:'El <b>pit de pollastre</b> ronda els 22 g de proteïnes per 100 g. La poma i l’enciam gairebé no en tenen, i l’arròs bullit uns 3 g.'},
 {d:'d',q:'Quantes kcal aporta 1 g de greix?',o:['9 kcal','4 kcal','7 kcal','2 kcal'],w:'El greix aporta unes <b>9 kcal per gram</b>, més del doble que les proteïnes o els hidrats de carboni (4 kcal).'},
 {d:'f',q:'Què és la fibra alimentària?',o:['Hidrats de carboni que no es digereixen a l’intestí prim','Un tipus de proteïna animal','Un tipus de greix saturat','Una vitamina'],w:'La fibra està formada per <b>hidrats de carboni que l’intestí prim no digereix ni absorbeix</b>.'},
 {d:'d',q:'Quin ingredient de la Barreja per a pa sense gluten de La Sin Gluten ajuda a donar estructura a la massa?',o:['Pellofa de psil·li','Gluten de blat','Llevat químic','Clara d’ou'],w:'La <b>pellofa de psil·li</b> reté aigua i dona elasticitat a la massa, una funció que en el pa normal fa el gluten.'},
 {d:'f',q:'Quant pesa un Protein Chocolate Muffin?',o:['50 g','30 g','100 g','150 g'],w:'Pesa <b>50 g</b>: format individual per portar a la bossa, la motxilla o la bossa del gimnàs.'},
 {d:'d',q:'Quines tres proteïnes porta la barreja dels Panets proteics Low Carb?',o:['Blat, soja i tramús','Sèrum, blat i ou','Pèsol, arròs i soja','Soja, llet i ou'],w:'La seva barreja de proteïnes combina <b>blat, soja i tramús</b>.'},
 {d:'f',q:'Quines llavors cobreixen el Protein Bagel Soft?',o:['Sèsam','Xia','Rosella','Carbassa'],w:'És un bagel de molla tendra <b>cobert de sèsam</b>.'}
]
}};
if(!T[L])return;
var X=T[L];

/* ---------- utilidades ---------- */
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var SVGRING='<svg viewBox="0 0 420 420" aria-hidden="true"><g transform="translate(0,420) scale(.1,-.1)" fill="currentColor"><path d="M2130 3994 c0 -6 9 -52 21 -104 21 -94 23 -341 4 -407 -6 -19 -2 -22 42 -28 352 -44 587 -143 801 -338 419 -381 562 -929 381 -1460 -266 -777 -1187 -1136 -1909 -745 -311 169 -550 451 -653 773 -96 298 -85 625 31 920 l40 100 -73 27 c-103 38 -214 102 -311 181 -46 37 -85 67 -88 67 -2 0 -24 -46 -49 -102 -344 -788 -136 -1681 518 -2229 1045 -876 2640 -397 3041 911 94 307 97 733 8 1060 -184 675 -755 1203 -1454 1345 -133 27 -350 45 -350 29z"/></g></svg>';
var SVGLEAF='<svg viewBox="0 0 310 430" aria-hidden="true"><g transform="translate(0,430) scale(.1,-.1)" fill="currentColor"><path d="M2278 4015 c-422 -155 -734 -1008 -520 -1422 33 -66 135 -20 283 127 331 327 475 924 306 1268 -11 23 -23 42 -26 41 -3 0 -23 -6 -43 -14z M767 3283 c-38 -90 -42 -118 -42 -283 0 -148 3 -176 28 -273 92 -351 312 -664 550 -780 116 -57 133 -57 155 -5 73 169 61 428 -30 687 -118 336 -390 640 -614 686 -28 5 -32 3 -47 -32z M2405 2194 c-456 -49 -931 -382 -1009 -706 -21 -89 317 -125 566 -60 365 95 692 336 806 593 36 84 37 106 5 122 -77 40 -248 64 -368 51z M355 2153 c-85 -200 -45 -574 90 -843 127 -253 348 -475 524 -526 61 -18 59 -20 91 64 152 401 -176 1137 -585 1312 -86 37 -102 36 -120 -7z M1995 1063 c-419 -38 -891 -352 -997 -662 -26 -75 -22 -80 70 -110 439 -147 1215 255 1318 682 14 60 -193 108 -391 90z"/></g></svg>';
function $(id){return document.getElementById(id)}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}
function fmt(s,o){return s.replace(/\{(\w)\}/g,function(m,k){return o[k]})}
function store(k,v,sess){try{var st=sess?sessionStorage:localStorage;if(v===undefined)return st.getItem(k);if(v===null)st.removeItem(k);else st.setItem(k,v)}catch(e){return null}}
function today(){return new Date().toDateString()}
function won(g){return store('bocado_win_'+g)===today()}
function toast(t){var d=el('div','jg-toast');d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},1800)}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function prize(kind,code){var p=X[kind];return{off:p[0],label:p[1],code:CFG.codes[code],ship:kind==='ship'}}
function coupon(p){
  var c=el('div','jg-coupon');
  c.innerHTML='<div class="jg-off">'+p.off+'</div><div>'+p.label+'</div><div class="jg-code">'+p.code+'</div>'+
    '<div class="jg-row"><button class="jg-btn jg-ghost" type="button">'+X.copy+'</button><a class="jg-btn" href="'+CFG.shop+'" target="_blank" rel="noopener">'+X.go+'</a></div>'+
    '<small>'+(p.ship?X.condShip:X.condMin)+' '+X.cond+(COND?' <a href="'+COND+'">'+X.condLink+'</a>':'')+'</small>';
  c.querySelector('button').onclick=function(){
    var e=c.querySelector('.jg-code');
    function sel(){var r=document.createRange();r.selectNodeContents(e);var s=getSelection();s.removeAllRanges();s.addRange(r)}
    try{navigator.clipboard.writeText(p.code).then(function(){toast(X.copied)},function(){sel();toast(X.selectIt)})}catch(err){sel();toast(X.selectIt)}
  };
  return c;
}
/* formulario de email antes de enseñar el cupón (se guarda en Supabase) */
var GID=0;
function gate(p,game){
  var g=X.gate,id='jg-g'+(++GID),f=el('form','jg-gate');f.noValidate=true;
  var acc=g.accept.replace('{c}',COND?'<a href="'+COND+'" target="_blank">':'').replace('{p}',PRIV?'<a href="'+PRIV+'" target="_blank">':'').replace(/\{\/\}/g,(COND||PRIV)?'</a>':'');
  f.innerHTML='<p class="jg-gh">'+g.h+'</p><label class="jg-sr" for="'+id+'e">'+g.label+'</label><input id="'+id+'e" type="email" required autocomplete="email" placeholder="'+g.ph+'">'+
    '<label class="jg-chk"><input type="checkbox" id="'+id+'a" required><span>'+acc+'</span></label>'+
    '<label class="jg-chk"><input type="checkbox" id="'+id+'n"><span>'+g.nl+'</span></label>'+
    '<p class="jg-err" hidden></p><button class="jg-btn" type="submit">'+g.btn+'</button><small>'+g.info+'</small>';
  var wrap=el('div','jg-gwrap');wrap.appendChild(f);
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var em=$(id+'e').value.trim(),ok=$(id+'a').checked,err=f.querySelector('.jg-err'),btn=f.querySelector('button');
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(em)||em.length>254){err.textContent=g.bad;err.hidden=false;$(id+'e').focus();return}
    if(!ok){err.textContent=g.need;err.hidden=false;return}
    err.hidden=true;btn.disabled=true;btn.textContent=g.sending;
    var done=false;function reveal(){if(done)return;done=true;wrap.innerHTML='';wrap.appendChild(coupon(p))}
    try{
      fetch(CFG.supabase.url+'/rest/v1/'+CFG.supabase.table,{method:'POST',headers:{apikey:CFG.supabase.key,Authorization:'Bearer '+CFG.supabase.key,'Content-Type':'application/json',Prefer:'return=minimal'},
        body:JSON.stringify({email:em.toLowerCase(),juego:game,premio:p.code,idioma:L,newsletter:$(id+'n').checked,acepta_condiciones:true})}).then(reveal,reveal);
    }catch(x){reveal()}
    setTimeout(reveal,4000);
  });
  return wrap;
}
function cover(box,title,text,btnText,fn,p,game){
  var d=box.firstElementChild;d.innerHTML='';
  var h=el('h3');h.textContent=title;d.appendChild(h);
  if(text){var t=el('p');t.textContent=text;d.appendChild(t)}
  if(p){store('bocado_win_'+game,today());d.appendChild(gate(p,game))}
  if(btnText){var b=el('button','jg-btn');b.type='button';b.textContent=btnText;b.onclick=fn;d.appendChild(b)}
  box.hidden=false;
}

/* ================= círculo que cruza la página ================= */
function flyer(){
  if(won('flyer')||store('bocado_flyer_seen',undefined,true))return;
  var b=el('button','jg-flyer',SVGRING);b.type='button';b.setAttribute('aria-label',X.flyer.aria);b.hidden=true;document.body.appendChild(b);
  var raf=null;
  function launch(){
    if(document.hidden){setTimeout(launch,3000);return}
    store('bocado_flyer_seen','1',true);
    var W=innerWidth,H=innerHeight,fromLeft=Math.random()<.5,s=58,y0=H*(.25+Math.random()*.5),dur=RM?9000:4800+Math.random()*1400,t0=performance.now();
    b.hidden=false;
    (function step(now){
      var k=(now-t0)/dur;
      if(k>=1){b.remove();return}
      var x=fromLeft?-s+k*(W+s*2):W+s-k*(W+s*2),y=y0+Math.sin(k*Math.PI*3)*H*.12,r=RM?0:k*720*(fromLeft?1:-1);
      b.style.transform='translate('+x+'px,'+y+'px) rotate('+r+'deg)';raf=requestAnimationFrame(step);
    })(t0);
  }
  b.addEventListener('click',function(){
    cancelAnimationFrame(raf);b.remove();
    var m=el('div','jg jg-modal');
    var box=el('div','jg-box');box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-label',X.flyer.h);
    var h=el('h3');h.textContent=X.flyer.h;var p=el('p');p.textContent=X.flyer.p;
    var close=el('button','jg-btn jg-ghost');close.type='button';close.textContent=X.flyer.close;
    box.append(h,p,gate(prize('off5','flyer'),'flyer'),close);m.appendChild(box);document.body.appendChild(m);
    store('bocado_win_flyer',today());close.focus();
    function shut(){m.remove();document.removeEventListener('keydown',esc)}
    function esc(e){if(e.key==='Escape')shut()}
    close.onclick=shut;m.addEventListener('click',function(e){if(e.target===m)shut()});document.addEventListener('keydown',esc);
  });
  var d=CFG.flyerDelay;setTimeout(launch,d[0]+Math.random()*(d[1]-d[0]));
}

/* ================= los tres juegos ================= */
function app(root){
  function rules(list){return '<ul class="jg-rules">'+list.map(function(r){return '<li><b>'+r[0]+'</b><span>'+r[1]+'</span></li>'}).join('')+'</ul>'}
  root.className='jg jg-app';
  root.innerHTML=
  '<div class="jg-tabs" role="tablist" aria-label="'+X.tabsLabel+'">'+
    ['c','m','q'].map(function(k,i){return '<button role="tab" type="button" id="jg-tab-'+k+'" aria-controls="jg-p-'+k+'" aria-selected="'+(i===0)+'">'+(i===1?SVGLEAF:SVGRING)+X.tabs[i]+'</button>'}).join('')+
  '</div>'+
  '<div class="jg-panel" role="tabpanel" id="jg-p-c" aria-labelledby="jg-tab-c"><div><h2>'+X.c.h+'</h2><p class="jg-lead">'+X.c.lead+'</p>'+rules(X.rules.c)+'<p class="jg-fine">'+X.c.fine+'</p></div>'+
    '<div class="jg-stage jg-arena" id="jg-arena" aria-label="'+X.c.zone+'"><div class="jg-hud"><span>'+X.c.hud+': <span id="jg-c-score">0</span></span><span class="jg-t" id="jg-c-time">20 s</span></div><div class="jg-cover" id="jg-c-cover"><div></div></div></div></div>'+
  '<div class="jg-panel" role="tabpanel" id="jg-p-m" aria-labelledby="jg-tab-m" hidden><div><h2>'+X.m.h+'</h2><p class="jg-lead">'+X.m.lead+'</p>'+rules(X.rules.m)+'<p class="jg-fine">'+X.m.fine+'</p></div>'+
    '<div class="jg-stage jg-mem"><div class="jg-hud"><span>'+X.m.hud+': <span id="jg-m-pairs">0</span>/8</span><span class="jg-t" id="jg-m-time">60 s</span></div><div class="jg-grid" id="jg-m-grid"></div><p class="jg-fact" id="jg-m-fact" aria-live="polite"></p><div class="jg-cover" id="jg-m-cover"><div></div></div></div></div>'+
  '<div class="jg-panel" role="tabpanel" id="jg-p-q" aria-labelledby="jg-tab-q" hidden><div><h2>'+X.q.h+'</h2><p class="jg-lead">'+X.q.lead+'</p>'+rules(X.rules.q)+'<p class="jg-fine">'+X.q.fine+'</p></div>'+
    '<div class="jg-stage jg-quiz"><div class="jg-hud"><span id="jg-q-n"></span><span class="jg-dots" id="jg-q-dots"></span></div><div class="jg-q" id="jg-q-box"></div><div class="jg-cover" id="jg-q-cover"><div></div></div></div></div>';

  /* pestañas (con #memory o #quiz en la dirección se abre ese juego) */
  var TABS=['c','m','q'];
  function show(k){
    TABS.forEach(function(t){$('jg-tab-'+t).setAttribute('aria-selected',t===k);$('jg-p-'+t).hidden=t!==k});
    stopCatch();stopMem();stopQuiz();
  }
  TABS.forEach(function(t,i){
    $('jg-tab-'+t).onclick=function(){show(t)};
    $('jg-tab-'+t).onkeydown=function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){var n=TABS[(i+d+3)%3];show(n);$('jg-tab-'+n).focus()}};
  });

  /* ---------- Atrapa el Bocado ---------- */
  var arena=$('jg-arena'),cCover=$('jg-c-cover'),cScore=$('jg-c-score'),cTime=$('jg-c-time');
  var rings=[],score=0,running=false,tEnd=0,lastSpawn=0,raf,last,GAME=20000;
  function spawn(now){
    var A=arena.getBoundingClientRect(),gold=Math.random()<.12;
    var s=Math.max(40,Math.min(64,A.width*.1))*(gold?.8:1);
    var b=el('button','jg-ring'+(gold?' jg-gold':''),SVGRING);b.type='button';
    b.setAttribute('aria-label',gold?X.c.gold:X.c.ring);b.style.setProperty('--s',s+'px');
    var prog=1-(tEnd-now)/GAME,sp=(RM?.08:.15+prog*.17)*(gold?1.6:1)*A.width/400;
    var side=Math.floor(Math.random()*4),x,y,ang;
    if(side===0){x=-s;y=Math.random()*(A.height-s);ang=(Math.random()-.5)*1.2}
    else if(side===1){x=A.width;y=Math.random()*(A.height-s);ang=Math.PI+(Math.random()-.5)*1.2}
    else if(side===2){x=Math.random()*(A.width-s);y=A.height;ang=-Math.PI/2+(Math.random()-.5)*1.2}
    else{x=Math.random()*(A.width-s);y=-s;ang=Math.PI/2+(Math.random()-.5)*1.2}
    var r={el:b,x:x,y:y,vx:Math.cos(ang)*sp,vy:Math.sin(ang)*sp,s:s,rot:Math.random()*360,vr:RM?0:(Math.random()-.5)*.4,gold:gold,ph:Math.random()*6,born:now};
    b.addEventListener('pointerdown',function(e){e.preventDefault();grab(r)});
    b.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();grab(r)}});
    arena.appendChild(b);rings.push(r);
  }
  function grab(r){
    if(!running||r.dead)return;r.dead=true;
    var pts=r.gold?3:1;score+=pts;cScore.textContent=score;
    var cx=r.x+r.s/2,cy=r.y+r.s/2,col=r.gold?'#eb5b4f':'#fff';
    var bu=el('div','jg-burst');bu.style.cssText='left:'+(cx-32)+'px;top:'+(cy-32)+'px;color:'+col;arena.appendChild(bu);
    var p=el('div','jg-pop');p.textContent='+'+pts;p.style.cssText='left:'+(cx-10)+'px;top:'+(cy-20)+'px;color:'+col;arena.appendChild(p);
    setTimeout(function(){bu.remove();p.remove()},750);r.el.remove();
  }
  function loop(now){
    var dt=Math.min(40,now-last);last=now;
    var A=arena.getBoundingClientRect(),left=tEnd-now;
    cTime.textContent=Math.max(0,Math.ceil(left/1000))+' s';
    if(now-lastSpawn>Math.max(240,620-(1-left/GAME)*380)){spawn(now);lastSpawn=now}
    rings=rings.filter(function(r){
      if(r.dead)return false;
      r.x+=r.vx*dt;r.y+=r.vy*dt+Math.sin((now-r.born)/220+r.ph)*.6;r.rot+=r.vr*dt;
      if((r.x<-r.s*1.5||r.x>A.width+r.s*.5||r.y<-r.s*1.5||r.y>A.height+r.s*.5)&&now-r.born>800){r.el.remove();return false}
      r.el.style.transform='translate('+r.x+'px,'+r.y+'px) rotate('+r.rot+'deg)';return true;
    });
    if(left<=0)return endCatch();
    raf=requestAnimationFrame(loop);
  }
  function clearRings(){rings.forEach(function(r){r.el.remove()});rings=[]}
  function startCatch(){clearRings();score=0;cScore.textContent='0';cCover.hidden=true;running=true;last=performance.now();tEnd=last+GAME;lastSpawn=0;raf=requestAnimationFrame(loop)}
  function stopCatch(){if(running){running=false;cancelAnimationFrame(raf);clearRings();introCatch()}}
  function endCatch(){
    running=false;cancelAnimationFrame(raf);cTime.textContent='0 s';clearRings();
    var p=score>=35?prize('ship','catch3'):score>=24?prize('off10','catch2'):score>=12?prize('off5','catch1'):null;
    if(p)cover(cCover,fmt(X.c.win,{n:score}),X.c.winP,null,null,p,'catch');
    else cover(cCover,fmt(X.c.lose,{n:score}),fmt(X.c.loseP,{k:12-score}),X.c.again,startCatch);
  }
  function introCatch(){
    cScore.textContent='0';cTime.textContent='20 s';
    if(won('catch'))cover(cCover,X.already[0],X.already[1]);
    else cover(cCover,X.c.ready,X.c.readyP,X.c.play,startCatch);
  }

  /* ---------- Memory ---------- */
  var MT=60000,mGrid=$('jg-m-grid'),mCover=$('jg-m-cover'),mTime=$('jg-m-time'),mPairs=$('jg-m-pairs'),mFact=$('jg-m-fact');
  var mUp=[],mFound=0,mStart=0,mTimer=null,mLock=false,mOn=false,PR=X.prods;
  function buildMem(){
    mGrid.innerHTML='';mUp=[];mFound=0;mStart=0;mLock=false;mPairs.textContent='0';mTime.textContent='60 s';mFact.textContent=X.m.hint;
    var cards=[];PR.forEach(function(p,i){cards.push({i:i,k:'frontal'},{i:i,k:'producto'})});
    shuffle(cards).forEach(function(c,n){
      var b=el('button','jg-card');b.type='button';b.dataset.i=c.i;b.setAttribute('aria-label',fmt(X.m.card,{n:n+1}));
      b.innerHTML='<span class="jg-in"><span class="jg-b">'+(n%2?SVGLEAF:SVGRING)+'</span><span class="jg-f"><img alt="" loading="lazy" class="'+(c.k==='producto'?'jg-ph':'')+'" src="'+ROOT+'assets/juego/'+PR[c.i][0]+'-'+c.k+'.jpg"></span></span>';
      b.onclick=function(){flip(b,c)};mGrid.appendChild(b);
    });
  }
  function tickMem(){var left=MT-(performance.now()-mStart);mTime.textContent=Math.max(0,Math.ceil(left/1000))+' s';if(left<=0)endMem(false)}
  function flip(b,c){
    if(!mOn||mLock||b.classList.contains('jg-up')||b.classList.contains('jg-done'))return;
    if(!mStart){mStart=performance.now();mTimer=setInterval(tickMem,200)}
    b.classList.add('jg-up');b.setAttribute('aria-label',PR[c.i][1]+', '+(c.k==='frontal'?X.m.pack:X.m.prod));
    mUp.push(b);if(mUp.length<2)return;
    var a=mUp[0],z=mUp[1];mUp=[];
    if(a.dataset.i===z.dataset.i){
      a.classList.add('jg-done');z.classList.add('jg-done');mFound++;mPairs.textContent=mFound;
      var p=PR[+a.dataset.i];mFact.innerHTML='<b></b> ';mFact.firstChild.textContent=p[1]+'.';mFact.appendChild(document.createTextNode(p[2]));
      if(mFound===PR.length)endMem(true);
    }else{
      mLock=true;a.classList.add('jg-bad');z.classList.add('jg-bad');
      setTimeout(function(){[a,z].forEach(function(x){x.classList.remove('jg-up','jg-bad');x.setAttribute('aria-label',X.m.down)});mLock=false},RM?500:750);
    }
  }
  function endMem(ok){
    clearInterval(mTimer);mOn=false;
    if(!ok){cover(mCover,X.m.timeUp,fmt(X.m.timeUpP,{n:mFound}),X.m.again,startMem);return}
    var s=Math.ceil((performance.now()-mStart)/1000),p=s<=35?prize('ship','mem3'):s<=45?prize('off10','mem2'):prize('off5','mem1');
    setTimeout(function(){cover(mCover,fmt(X.m.win,{n:s}),X.m.winP,null,null,p,'mem')},600);
  }
  function startMem(){buildMem();mCover.hidden=true;mOn=true}
  function stopMem(){if(mOn||mStart){clearInterval(mTimer);mOn=false;introMem()}}
  function introMem(){
    buildMem();mOn=false;
    if(won('mem'))cover(mCover,X.already[0],X.already[1]);
    else cover(mCover,X.m.ready,X.m.readyP,X.m.play,startMem);
  }

  /* ---------- Quiz ---------- */
  var QN=5,QT=12000,qBox=$('jg-q-box'),qCover=$('jg-q-cover'),qN=$('jg-q-n'),qDots=$('jg-q-dots'),QS=X.qs;
  var qList=[],qi=0,qOk=0,qTimer=null,qT0=0,qOn=false;
  function startQuiz(){
    qList=shuffle(QS.filter(function(x){return x.d==='f'})).slice(0,3).concat(shuffle(QS.filter(function(x){return x.d==='d'})).slice(0,2));
    qi=0;qOk=0;qOn=true;qCover.hidden=true;qDots.innerHTML=new Array(QN+1).join('<i></i>');ask();
  }
  function ask(){
    var Q=qList[qi],right=Q.o[0];qN.textContent=fmt(X.q.n,{n:qi+1});
    qBox.innerHTML='<div class="jg-bar"><i id="jg-q-bar"></i></div><h3></h3><div class="jg-opts"></div>';
    qBox.querySelector('h3').textContent=Q.q;
    var opts=qBox.querySelector('.jg-opts');
    shuffle(Q.o.slice()).forEach(function(t,n){
      var b=el('button','jg-opt','<span class="jg-k">'+'ABCD'[n]+'</span><span></span>');b.type='button';
      b.lastChild.textContent=t;b.dataset.ok=t===right?'1':'';b.onclick=function(){answer(t===right,b)};opts.appendChild(b);
    });
    qT0=performance.now();clearInterval(qTimer);
    qTimer=setInterval(function(){var k=1-(performance.now()-qT0)/QT,bar=$('jg-q-bar');if(bar)bar.style.transform='scaleX('+Math.max(0,k)+')';if(k<=0)answer(false,null)},50);
  }
  function answer(good,picked){
    clearInterval(qTimer);
    qBox.querySelectorAll('.jg-opt').forEach(function(b){b.disabled=true;if(b.dataset.ok)b.classList.add('jg-ok')});
    if(picked&&!good)picked.classList.add('jg-no');
    if(good)qOk++;
    qDots.children[qi].className=good?'jg-ok':'jg-no';
    var w=el('p','jg-why','<b>'+(good?X.q.ok:picked?X.q.no:X.q.timeout)+'</b> '+qList[qi].w);qBox.appendChild(w);
    var nx=el('button','jg-btn');nx.type='button';nx.textContent=qi<QN-1?X.q.next:X.q.result;
    nx.onclick=function(){qi++;if(qi<QN)ask();else endQuiz()};qBox.appendChild(nx);nx.focus({preventScroll:true});
  }
  function endQuiz(){
    qOn=false;
    var p=qOk===5?prize('off10','quiz2'):qOk===4?prize('off5','quiz1'):null;
    if(p)cover(qCover,fmt(X.q.win,{n:qOk}),X.q.winP,null,null,p,'quiz');
    else cover(qCover,fmt(X.q.lose,{n:qOk}),X.q.loseP,X.q.again,startQuiz);
  }
  function stopQuiz(){if(qOn){clearInterval(qTimer);qOn=false;introQuiz()}}
  function introQuiz(){
    qBox.innerHTML='';qDots.innerHTML='';qN.textContent=fmt(X.q.n,{n:1});
    if(won('quiz'))cover(qCover,X.already[0],X.already[1]);
    else cover(qCover,X.q.ready,X.q.readyP,X.q.play,startQuiz);
  }

  introCatch();introMem();introQuiz();
  var h=(location.hash||'').slice(1);if(h==='memory')show('m');else if(h==='quiz')show('q');
}

function init(){var a=$('jg-app');if(a)app(a);else flyer()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
