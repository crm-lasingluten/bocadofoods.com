// Recetario: 108 recetas. product = ficha enlazada (null si el producto ya no está en la web)
var RECIPES = [
{
"slug": "bocadillo-de-atun-veraniego",
"title": "Bocadillo de Atún Veraniego",
"img": "recipe_001",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos",
"Atún",
"Pepinillos",
"Aceitunas",
"Zumo de limón",
"Yogur",
"Pimienta",
"Cebollino"
],
"steps": [
"Mezclar todos los ingredientes del relleno",
"Rellenar los panecillos"
],
"nut": "1 panecillo (50g): 6,5g carbohidratos, 14,5g proteínas, 4,1g fibra",
"video": "NQH9-sNL5zU"
},
{
"slug": "baguettes-dulce-salado-de-verano",
"title": "Baguettes Dulce-Salado de Verano",
"img": "recipe_002",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"Baguettes low carb",
"Pesto",
"Burrata",
"Jamón",
"Melocotón",
"Cebollino"
],
"steps": [
"Tostar las baguettes",
"Poner pesto, burrata, jamón y melocotón",
"Terminar con cebollino"
],
"nut": "",
"video": null
},
{
"slug": "hamburguesas-vegetales-rellenas-de-queso",
"title": "Hamburguesas Vegetales Rellenas de Queso",
"img": "recipe_003",
"product": "mezcla-picada-vegetal-150",
"cat": "Picada Vegetal",
"ing": [
"Picada vegetal Bocado",
"Calabacín",
"Zanahoria",
"Especias",
"Mostaza Dijón",
"Queso"
],
"steps": [
"Hidratar la picada vegetal",
"Añadir verduras cocinadas al vapor",
"Añadir especias y mostaza Dijón",
"Formar hamburguesas rellenas de queso",
"Cocinar en sartén"
],
"nut": "",
"video": "JyKoSk2LrbQ"
},
{
"slug": "tostadas-veraniegas-con-sandia",
"title": "Tostadas Veraniegas con Sandía",
"img": "recipe_004",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"Yogur griego",
"Sandía",
"Hierbabuena",
"Zumo de lima",
"Queso feta"
],
"steps": [
"Tostar dos rebanadas de pan",
"Poner yogur griego de base",
"Añadir sandía en cubitos, hierbabuena, lima y queso feta"
],
"nut": "",
"video": "P4Zr0aEbkQ0"
},
{
"slug": "nachos-con-pollo-y-guacamole",
"title": "Nachos con Pollo y Guacamole",
"img": "recipe_005",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Aceite y especias mexicanas",
"Queso",
"Pollo desmechado",
"Guacamole",
"Salsa mexicana",
"Queso crema",
"Cilantro"
],
"steps": [
"Cortar los wraps en triángulos",
"Rociar con aceite y especias mexicanas",
"Hornear con queso 10 min a 160°C",
"Añadir toppings: pollo, guacamole, salsa, queso crema y cilantro"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": null
},
{
"slug": "cheesecake-de-frutos-rojos-con-tostadas",
"title": "Cheesecake de Frutos Rojos con Tostadas",
"img": "recipe_006",
"product": "tostadas-low-carb",
"cat": "Tostada Low Carb",
"ing": [
"Tostadas Low Carb",
"Crema de frutos secos",
"Yogur",
"Queso crema",
"Esencia de vainilla",
"Edulcorante",
"Zumo de limón",
"Frutos rojos congelados"
],
"steps": [
"Triturar las tostadas con crema de frutos secos para la base",
"Mezclar yogur, queso crema y esencia de vainilla para el relleno",
"Preparar mermelada de frutos rojos reduciéndolos con edulcorante y limón",
"Montar la cheesecake por capas"
],
"nut": "",
"video": "t0iq2uo2aNY"
},
{
"slug": "pizza-de-calabacin",
"title": "Pizza de Calabacín",
"img": "recipe_007",
"product": "mezcla-pizza-proteica",
"cat": "Pizza",
"ing": [
"Pizza Low Carb Bocado",
"Queso crema",
"Rodajas de calabacín",
"Queso grana padano"
],
"steps": [
"Untar la base con queso crema",
"Añadir calabacín y grana padano",
"Hornear"
],
"nut": "Porción (66g): 18g proteínas, 8,8g fibra, 7,8g carbohidratos",
"video": null
},
{
"slug": "bocaditos-de-wrap-con-salmon",
"title": "Bocaditos de Wrap con Salmón",
"img": "recipe_008",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Huevo",
"Queso",
"Rúcula",
"Canónigos",
"Salmón ahumado"
],
"steps": [
"Batir dos huevos en sartén caliente",
"Poner un wrap encima y cocinar",
"Rellenar con queso, rúcula, canónigos y salmón",
"Enrollar y cortar"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": null
},
{
"slug": "bocaditos-de-sandwich-con-atun",
"title": "Bocaditos de Sándwich con Atún",
"img": "recipe_009",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Aguacate",
"Queso crema",
"Atún",
"Especias"
],
"steps": [
"Cortar el pan en bocaditos",
"Mezclar aguacate, queso crema, atún y especias",
"Rellenar los bocaditos"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra, IG24",
"video": null
},
{
"slug": "tartaletas-de-puerro-y-bacon",
"title": "Tartaletas de Puerro y Bacon",
"img": "recipe_010",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Puerro",
"Bacon",
"Huevo"
],
"steps": [
"Cortar los wraps y colocar en molde de muffins",
"Saltear puerro y bacon",
"Rellenar con el salteado y huevo batido",
"Hornear"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": null
},
{
"slug": "baguette-rellena-mundial",
"title": "Baguette Rellena Mundial",
"img": "recipe_011",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"Baguette Low Carb",
"Champiñones",
"Cebolla",
"Huevo",
"Queso rallado"
],
"steps": [
"Vaciar la miga de la baguette",
"Rellenar con salteado de champiñones y cebolla, huevo batido y queso rallado",
"Hornear"
],
"nut": "1 baguette (110g): 14g carbohidratos, 30g proteínas, 13g fibra",
"video": null
},
{
"slug": "3-ideas-de-tostas-hummus-salmon-aguacate",
"title": "3 Ideas de Tostas (Hummus, Salmón, Aguacate)",
"img": "recipe_012",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos Bocado",
"Tomate cherry",
"Salmón",
"Queso crema",
"Albahaca",
"Nueces",
"Aguacate",
"Huevo de codorniz"
],
"steps": [
"Hornear tomates cherry con aceite y especias para la primera tosta con hummus",
"Triturar queso crema con albahaca y nueces para la segunda con salmón",
"Untar aguacate y poner huevos de codorniz para la tercera"
],
"nut": "1 panecillo (50g): 6,5g carbohidratos, 14,5g proteínas, 4,1g fibra",
"video": null
},
{
"slug": "conitos-rellenos-navidenos",
"title": "Conitos Rellenos Navideños",
"img": "recipe_013",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb Bocado",
"Aguacate",
"Queso crema",
"Limón",
"Salmón ahumado",
"Pimienta"
],
"steps": [
"Cortar y enrollar los wraps en forma de cono",
"Airfryer 5 minutos",
"Mezclar aguacate, queso crema, limón, salmón y pimienta",
"Rellenar los conitos"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": null
},
{
"slug": "tostadas-dulces-saladas-fin-de-ano",
"title": "Tostadas Dulces-Saladas Fin de Año",
"img": "recipe_014",
"product": "tostadas-low-carb",
"cat": "Tostada Low Carb",
"ing": [
"Tostadas Low Carb",
"Mermelada sin azúcar de fresa o frambuesa",
"Queso fresco de cabra",
"Jamón",
"Perejil"
],
"steps": [
"Colocar las tostadas en una bandeja",
"Añadir mermelada",
"Colocar queso de cabra y jamón",
"Terminar con perejil"
],
"nut": "",
"video": null
},
{
"slug": "baguettes-rellenas",
"title": "Baguettes Rellenas",
"img": "recipe_015",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"Baguettes",
"Huevos",
"Especias",
"Queso rallado",
"Pavo",
"Espinacas"
],
"steps": [
"Vaciar las baguettes y quitar la miga",
"Mezclar huevos, especias, queso rallado, pavo y espinacas",
"Rellenar las baguettes",
"Hornear a 160°C unos 15 min"
],
"nut": "",
"video": null
},
{
"slug": "tostadas-tarta-de-manzana",
"title": "Tostadas Tarta de Manzana",
"img": "recipe_016",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"Yogur",
"Huevo",
"Edulcorante",
"Manzana",
"Canela"
],
"steps": [
"Hacer un hueco en las rebanadas de pan",
"Mezclar yogur, huevo y edulcorante",
"Rellenar los huecos con la mezcla",
"Añadir rodajas de manzana y canela",
"Airfryer 5 min"
],
"nut": "",
"video": null
},
{
"slug": "tostadas-con-langostinos",
"title": "Tostadas con Langostinos",
"img": "recipe_017",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"Pimiento rojo",
"Pimiento verde",
"Cebolla",
"Zumo de lima",
"Sal",
"AOVE",
"Guacamole",
"Langostinos"
],
"steps": [
"Preparar un pico de gallo con pimientos, cebolla, lima, sal y AOVE",
"Tostar dos rebanadas de pan",
"Montar las tostadas con guacamole, pico de gallo y langostinos"
],
"nut": "",
"video": "WW5jdmpGrPk"
},
{
"slug": "sandwich-viral-de-huevo-dia-del-sandwich",
"title": "Sándwich Viral de Huevo (Día del Sándwich)",
"img": "recipe_018",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"Huevo",
"Queso",
"Tomate",
"Espinacas",
"Relleno a gusto"
],
"steps": [
"Batir dos huevos y verter en sartén caliente",
"Poner dos rebanadas de pan sobre los huevos, tapar y cocinar",
"Dar la vuelta y rellenar con queso, tomate y espinacas",
"Cerrar el sándwich"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra",
"video": null
},
{
"slug": "tarta-salada-de-brocoli-con-wrap",
"title": "Tarta Salada de Brócoli con Wrap",
"img": "recipe_019",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Huevo",
"Especias",
"Brócoli",
"Queso de cabra"
],
"steps": [
"Mezclar huevos, especias y brócoli hervido",
"Poner un wrap en un molde",
"Añadir la mezcla de huevo y brócoli, con rodajas de queso de cabra",
"Hornear"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": "ECuwmS6OX3A"
},
{
"slug": "bocadillo-mundial",
"title": "Bocadillo Mundial",
"img": "recipe_020",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"Baguette Low Carb Bocado",
"Berenjenas",
"Pollo",
"Pimientos asados",
"Queso",
"Yogur griego",
"Mostaza",
"Albahaca",
"Ajo en polvo"
],
"steps": [
"Cortar y tostar la baguette",
"Hacer berenjenas y pollo a la plancha",
"Preparar salsa con yogur, mostaza, albahaca y ajo en polvo",
"Montar el bocadillo con pimientos asados y queso"
],
"nut": "1 baguette (110g): 14g carbohidratos, 30g proteínas, 13g fibra",
"video": null
},
{
"slug": "tostadas-sabor-tarta-de-manzana",
"title": "Tostadas Sabor Tarta de Manzana",
"img": "recipe_021",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Yogur",
"Huevo",
"Edulcorante",
"Manzana",
"Canela"
],
"steps": [
"Hacer un hueco en las rebanadas de pan",
"Mezclar yogur, huevo y edulcorante",
"Rellenar el hueco con la mezcla",
"Añadir manzana y canela",
"Airfryer 5 min"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra",
"video": "jovD3jRV33A"
},
{
"slug": "pizza-de-verduras",
"title": "Pizza de Verduras",
"img": "recipe_022",
"product": "mezcla-pizza-proteica",
"cat": "Pizza",
"ing": [
"Pizza Low Carb Bocado",
"Salsa de tomate",
"Queso rallado",
"Alcachofas",
"Pimientos asados",
"Pechuga de pollo"
],
"steps": [
"Añadir los toppings a la base de pizza",
"Hornear"
],
"nut": "Porción (66g): 18g proteínas, 8,8g fibra, 7,8g carbohidratos",
"video": "cQVAwwOV8bY"
},
{
"slug": "pizza-de-calabaza-con-sabor-a-otono",
"title": "Pizza de Calabaza con Sabor a Otoño",
"img": "recipe_023",
"product": "mezcla-pizza-proteica",
"cat": "Pizza",
"ing": [
"Base de pizza Low Carb Bocado",
"Calabaza",
"Aceite de oliva y tomillo",
"Salsa de tomate",
"Jamón Serrano",
"Queso Azul"
],
"steps": [
"Hornear trocitos de calabaza con aceite y tomillo",
"Añadir salsa de tomate, jamón serrano, calabaza y queso azul sobre la base",
"Hornear"
],
"nut": "Porción (66g): 18g proteínas, 8,8g fibra, 7,8g carbohidratos",
"video": null
},
{
"slug": "tacos-vegetales-con-base-de-lechuga",
"title": "Tacos Vegetales con Base de Lechuga",
"img": "recipe_024",
"product": "mezcla-picada-vegetal-150",
"cat": "Picada Vegetal",
"ing": [
"Picada vegetal Bocado",
"Lechuga",
"Guacamole",
"Tomate",
"Yogur natural"
],
"steps": [
"Hidratar la picada vegetal y cocinar un poco en sartén",
"Rellenar cogollos de lechuga con picada vegetal, guacamole, tomate y yogur",
"Especiar al gusto"
],
"nut": "Alto en proteína, bajo en grasas, fuente de fibra, sin colesterol, gluten free, vegano",
"video": "AtBnyGm3nnc"
},
{
"slug": "mini-quiches-de-pan-de-proteinas",
"title": "Mini Quiches de Pan de Proteínas",
"img": "recipe_025",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan de proteínas",
"Huevo",
"Jamón",
"Queso",
"Verduras al gusto"
],
"steps": [
"Aplastar las rebanadas con un rodillo",
"Colocar sobre un molde de muffins",
"Rellenar con huevo, jamón, queso y verduras",
"Hornear"
],
"nut": "",
"video": null
},
{
"slug": "panecillos-rellenos-de-pesto-y-huevo",
"title": "Panecillos Rellenos de Pesto y Huevo",
"img": "recipe_026",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos Bocado",
"Pesto",
"Huevo",
"Tomate cherry"
],
"steps": [
"Quitar la miga al panecillo",
"Rellenar con pesto, huevo y tomates cherry",
"Hornear"
],
"nut": "1 panecillo (50g): 6,5g carbohidratos, 14,5g proteínas, 4,1g fibra",
"video": "-rS00CdsJZo"
},
{
"slug": "pizza-rolls",
"title": "Pizza Rolls",
"img": "recipe_027",
"product": "mezcla-pizza-proteica",
"cat": "Pizza",
"ing": [
"Pizza Low Carb Bocado",
"Salsa de tomate",
"Jamón cocido",
"Queso mozzarella"
],
"steps": [
"Cortar la base de pizza en 3",
"Rellenar con salsa de tomate y jamón, enrollar",
"Colocar los rolls en bandeja de horno",
"Cubrir con mozzarella y orégano",
"Hornear"
],
"nut": "Porción (66g): 18g proteínas, 8,8g fibra, 7,8g carbohidratos",
"video": "fo6PPEA7MOE"
},
{
"slug": "mini-tacos-de-picada-vegetal",
"title": "Mini Tacos de Picada Vegetal",
"img": "recipe_028",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Picada vegetal Bocado",
"Salsa de tomate",
"Aguacate",
"Queso rallado"
],
"steps": [
"Cortar los wraps en circulitos",
"Hidratar la picada vegetal",
"Rellenar con picada vegetal, salsa de tomate y aguacate",
"Cubrir con queso rallado",
"Hornear"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": "iqSarAyYzcM"
},
{
"slug": "quesadilla-de-halloween",
"title": "Quesadilla de Halloween",
"img": "recipe_029",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"2 Wraps Low Carb",
"Relleno a gusto (queso, jamón)",
"Aceite y especias"
],
"steps": [
"Recortar la forma de una cara en un wrap",
"Colocar relleno en el otro wrap",
"Cubrir con el wrap recortado",
"Pincelar con aceite y especias",
"Hornear"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": "dQMx6h8Qve4"
},
{
"slug": "sandwich-de-huevo-vuelta-al-cole",
"title": "Sándwich de Huevo Vuelta al Cole",
"img": "recipe_030",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos",
"Huevo",
"Yogur",
"Mostaza dijón",
"Sal y pimienta"
],
"steps": [
"Cocer 3 huevos y separar claras de yemas",
"Mezclar yemas con yogur, mostaza, sal y pimienta",
"Añadir las claras cortadas en daditos",
"Rellenar los panecillos"
],
"nut": "1 panecillo (50g): 6,5g carbohidratos, 14,5g proteínas, 4,1g fibra",
"video": null
},
{
"slug": "canelones-de-berenjena-con-picada-vegetal",
"title": "Canelones de Berenjena con Picada Vegetal",
"img": "recipe_031",
"product": "mezcla-picada-vegetal-150",
"cat": "Picada Vegetal",
"ing": [
"Picada Vegetal Bocado",
"Berenjena",
"Queso crema",
"Tomate",
"Queso rallado"
],
"steps": [
"Laminar la berenjena y pasar por la plancha",
"Hidratar la picada vegetal y mezclar con queso crema",
"Rellenar y enrollar las láminas de berenjena",
"Colocar sobre tomate y cubrir con queso rallado",
"Hornear hasta gratinar"
],
"nut": "Alto en proteína, bajo en grasas, fuente de fibra, sin colesterol, gluten free",
"video": null
},
{
"slug": "bocadillo-de-pollo-y-verduras-asadas",
"title": "Bocadillo de Pollo y Verduras Asadas",
"img": "recipe_032",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"Baguette Low Carb Bocado",
"Guacamole",
"Pechuga de pollo",
"Verduras asadas"
],
"steps": [
"Tostar la baguette",
"Hacer la pechuga a la plancha",
"Asar las verduras",
"Montar el sándwich"
],
"nut": "1 baguette (110g): 14g carbohidratos, 30g proteínas, 13g fibra",
"video": "f7bFZ4LNhik"
},
{
"slug": "sandwich-de-espinacas-y-queso",
"title": "Sándwich de Espinacas y Queso",
"img": "recipe_033",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Ajo",
"Espinacas",
"Queso feta",
"Pan The Original Protein Bread",
"Queso mozzarella"
],
"steps": [
"Cocinar ajo y espinacas en sartén",
"Añadir queso feta",
"Rellenar el pan con mozzarella y la mezcla de espinacas",
"Tostar"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra",
"video": "gYPTRU4dMqM"
},
{
"slug": "pizza-de-salmon-queso-y-rucula",
"title": "Pizza de Salmón, Queso y Rúcula",
"img": "recipe_034",
"product": "mezcla-pizza-proteica",
"cat": "Pizza",
"ing": [
"Pizza low carb Bocado",
"Queso mozzarella",
"Salmón",
"Queso brie",
"Rúcula"
],
"steps": [
"Añadir mozzarella, salmón y brie a la base",
"Hornear",
"Añadir rúcula fresca al sacar del horno"
],
"nut": "Porción (66g): 18g proteínas, 8,8g fibra, 7,8g carbohidratos",
"video": "pn2vgx9_l24"
},
{
"slug": "rollitos-de-hummus-y-verduritas",
"title": "Rollitos de Hummus y Verduritas",
"img": "recipe_035",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap bajo en carbohidratos Bocado",
"Hummus",
"Zanahoria",
"Pimiento rojo",
"Pepino"
],
"steps": [
"Poner hummus en la base del wrap",
"Añadir palitos de zanahoria, pimiento y pepino",
"Enrollar y cortar a la mitad"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": null
},
{
"slug": "sandwich-saludable-vuelta-a-la-rutina",
"title": "Sandwich Saludable Vuelta a la Rutina",
"img": "recipe_036",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"Aguacate",
"Pesto",
"Huevo",
"Espinaca"
],
"steps": [
"Tostar las rebanadas de pan",
"Untar una rebanada con aguacate y la otra con pesto",
"Rellenar con huevo a la plancha y espinacas"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra, IG bajo",
"video": null
},
{
"slug": "bocaditos-de-platano",
"title": "Bocaditos de Plátano",
"img": "recipe_037",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Crema de frutos secos (cacahuete o almendra)",
"Plátano",
"Pepitas de chocolate sin azúcar",
"Yogur"
],
"steps": [
"Untar el wrap con crema de frutos secos",
"Poner un plátano en el centro y enrollar",
"Cortar a rodajas",
"Añadir pepitas de chocolate encima",
"Airfryer unos minutos hasta derretir el chocolate",
"Acompañar con yogur"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": null
},
{
"slug": "bocadillo-de-berenjenas",
"title": "Bocadillo de Berenjenas",
"img": "recipe_038",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos",
"Berenjena",
"Aceite de oliva",
"Tomate triturado natural",
"Queso"
],
"steps": [
"Cocinar rodajas de berenjena a la plancha con aceite",
"Partir el panecillo a la mitad",
"Rellenar con tomate triturado, berenjenas y queso",
"Llevar a la plancha o tostadora"
],
"nut": "1 panecillo (50g): 6,5g carbohidratos, 14,5g proteínas, 4,1g fibra",
"video": null
},
{
"slug": "napolitanas-rellenas-de-jamon-y-queso",
"title": "Napolitanas Rellenas de Jamón y Queso",
"img": "recipe_039",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Jamón",
"Queso",
"Huevo para pintar",
"Semillas de sésamo"
],
"steps": [
"Rellenar los wraps con jamón y queso",
"Cortar y doblar",
"Pintar con huevo y semillas de sésamo",
"Hornear"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": "JVXXhPz2OE0"
},
{
"slug": "tostadas-de-huevo",
"title": "Tostadas de Huevo",
"img": "recipe_040",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Huevo",
"Queso",
"Tomatitos",
"Orégano"
],
"steps": [
"Hacer un hueco en la rebanada de pan con una cuchara",
"Rellenar con huevo, queso, tomatitos y orégano",
"Hornear en airfryer, horno o sartén con tapa"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra, IG 24",
"video": null
},
{
"slug": "tostadas-de-atun",
"title": "Tostadas de Atún",
"img": "recipe_041",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Huevo",
"Aguacate",
"Limón",
"Atún",
"Yogur griego",
"Sal"
],
"steps": [
"Tostar dos rebanadas de pan",
"Mezclar huevo cocido, aguacate, limón, sal, atún y yogur griego",
"Colocar el relleno encima de las tostadas"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra, IG 24",
"video": null
},
{
"slug": "pizza-caprese",
"title": "Pizza Caprese",
"img": "recipe_042",
"product": "mezcla-pizza-proteica",
"cat": "Pizza",
"ing": [
"Pizza Low Carb BOCADO",
"Salsa de tomate",
"Mozzarella",
"Tomatitos",
"Albahaca",
"Crema de vinagre balsámico"
],
"steps": [
"Poner salsa de tomate casera, mozzarella y tomatitos en la base",
"Hornear hasta fundir el queso",
"Añadir albahaca fresca y crema de vinagre balsámico"
],
"nut": "Porción (66g): 18g proteínas, 8,8g fibra, 7,8g carbohidratos",
"video": "vXZQqdO_pxo"
},
{
"slug": "triangulos-rellenos-de-pollo-y-espinacas",
"title": "Triángulos Rellenos de Pollo y Espinacas",
"img": "recipe_043",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Espinaca",
"Pollo",
"Queso crema"
],
"steps": [
"Preparar el relleno de espinacas, pollo y queso crema en sartén",
"Cortar, rellenar y doblar el wrap en triángulos",
"Dorar en airfryer, sartén u horno"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": "bJzmfnEtpyw"
},
{
"slug": "panecillos-rellenos",
"title": "Panecillos Rellenos",
"img": "recipe_044",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos Bocado",
"Pavo o jamón cocido",
"Huevo",
"Queso"
],
"steps": [
"Cortar a la mitad y vaciar la miga",
"Rellenar con salsa de tomate, pavo o jamón, huevo batido y queso",
"Hornear 10 min a 180°C"
],
"nut": "1 panecillo (50g): 6,5g carbohidratos, 14,5g proteínas, 4,1g fibra",
"video": null
},
{
"slug": "brochetas-de-sandwich",
"title": "Brochetas de Sandwich",
"img": "recipe_045",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Queso",
"Jamón",
"Tomate",
"Aceituna"
],
"steps": [
"Hacer un sandwich mixto de jamón y queso",
"Cortar en 4",
"Armar brochetas intercalando tomate",
"Terminar con una aceituna"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra, IG 24",
"video": "9r6JJGlKMgI"
},
{
"slug": "mini-quesadillas",
"title": "Mini Quesadillas",
"img": "recipe_046",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Hummus",
"Aguacate"
],
"steps": [
"Cortar los wraps en círculos pequeños",
"Rellenar con hummus y aguacate",
"Doblar y hacer a la plancha"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra, apto vegano",
"video": "aeLrPJJbxus"
},
{
"slug": "tostadas-de-pizza",
"title": "Tostadas de Pizza",
"img": "recipe_047",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Salsa de tomate casera",
"Atún al natural",
"Queso",
"Rodaja de tomate",
"Albahaca"
],
"steps": [
"Poner salsa de tomate, atún, queso y tomate sobre el pan",
"Espolvorear albahaca",
"Airfryer u horno"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra",
"video": null
},
{
"slug": "desayuno-ideal-con-wrap",
"title": "Desayuno Ideal con Wrap",
"img": "recipe_048",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wraps Low Carb",
"Aguacate",
"Queso",
"Huevo revuelto"
],
"steps": [
"Machacar el aguacate sobre el wrap",
"Añadir queso y huevo revuelto",
"Doblar y pasar por la plancha"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": "ql4e49ayU6w"
},
{
"slug": "hamburguesas-vegetales-rellenas-de-queso-2",
"title": "Hamburguesas Vegetales Rellenas de Queso",
"img": "recipe_049",
"product": "mezcla-picada-vegetal-150",
"cat": "Picada Vegetal",
"ing": [
"Picada Vegetal Bocado",
"Espárrago",
"Zanahoria",
"Queso"
],
"steps": [
"Saltear espárragos y zanahoria",
"Hidratar la picada vegetal",
"Mezclar con las verduras salteadas",
"Dar forma de hamburguesa rellenando de queso",
"Cocinar a la sartén"
],
"nut": "Alto en proteína, bajo en grasas, fuente de fibra, sin colesterol, gluten free, apto vegano",
"video": "JyKoSk2LrbQ"
},
{
"slug": "pizza-sin-gluten-proteica",
"title": "Pizza Sin Gluten Proteica",
"img": "recipe_050",
"product": "mezcla-pizza-proteica",
"cat": "Pizza",
"ing": [
"Mezcla Pizza Proteica Sin Gluten",
"Agua",
"Aceite de oliva",
"Levadura",
"Toppings al gusto (salsa de tomate, queso, pollo, tomates, orégano)"
],
"steps": [
"Mezclar agua, aceite y levadura según instrucciones",
"Amasar y dejar reposar",
"Dar forma a la masa",
"Añadir toppings",
"Hornear"
],
"nut": "Sin gluten, alta en proteínas, apto vegano/veggie",
"video": null
},
{
"slug": "tostadas-de-hummus-con-queso-feta",
"title": "Tostadas de Hummus con Queso Feta",
"img": "recipe_051",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"2 rebanadas de The Original Protein Bread",
"Hummus casero",
"Tomate natural",
"Queso feta"
],
"steps": [
"Tostar el pan",
"Untar hummus",
"Añadir tomate en rodajas y especias",
"Terminar con queso feta"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra, IG24",
"video": null
},
{
"slug": "galette-con-bordes-rellenos-dulce",
"title": "Galette con Bordes Rellenos (dulce)",
"img": "recipe_052",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wraps Low Carb",
"Queso",
"Tomate o relleno a gusto",
"Huevo"
],
"steps": [
"Colocar trocitos de queso en los bordes del wrap",
"Enrollar y fijar con palillos",
"Rellenar a gusto (tomate y huevo)",
"Cocinar en sartén"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": null
},
{
"slug": "galette-con-bordes-rellenos-salada",
"title": "Galette con Bordes Rellenos (salada)",
"img": "recipe_053",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wraps low carb",
"Queso",
"Tomate triturado",
"Jamón en taquitos",
"Huevo"
],
"steps": [
"Poner trozos de queso en los bordes del wrap, enrollar y cerrar con palillo",
"Rellenar con tomate, jamón y huevo",
"Cocinar en sartén a fuego bajo con tapa"
],
"nut": "",
"video": null
},
{
"slug": "sandwich-saludable-para-llevar-a-la-playa",
"title": "Sandwich Saludable Para Llevar a la Playa",
"img": "recipe_054",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"2 huevos cocidos",
"Guacamole",
"Zumo de lima o limón",
"Pimienta"
],
"steps": [
"Chafar huevos cocidos con guacamole",
"Añadir zumo de limón y pimienta",
"Rellenar el sándwich"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra",
"video": "zvKAlQRqIIM"
},
{
"slug": "paninis-proteicos",
"title": "Paninis Proteicos",
"img": "recipe_055",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos BOCADO",
"Queso crema",
"Especias al gusto",
"Queso",
"Pimientos de colores",
"Calabacín"
],
"steps": [
"Partir el panecillo en dos",
"Untar queso crema y especias",
"Añadir toppings de queso, pimientos y calabacín",
"Hornear hasta fundir el queso"
],
"nut": "1 panecillo (50g): 6,5g carbohidratos, 14,5g proteínas, 4,1g fibra",
"video": "L-fQKm7XRG0"
},
{
"slug": "raviolis-de-calabacin-con-picada-vegetal",
"title": "Raviolis de Calabacín con Picada Vegetal",
"img": "recipe_056",
"product": "mezcla-picada-vegetal-150",
"cat": "Picada Vegetal",
"ing": [
"Calabacín",
"Picada vegetal Bocado",
"Tomate natural triturado",
"Orégano"
],
"steps": [
"Laminar el calabacín con mandolina",
"Hidratar la picada vegetal",
"Rellenar y cerrar en saquitos entre láminas de calabacín",
"Colocar sobre tomate en bandeja de horno",
"Hornear 15-20 min"
],
"nut": "Alto en proteína, bajo en grasas, fuente de fibra, sin colesterol, gluten free, vegano",
"video": "tlu3aUvuK4I"
},
{
"slug": "tostada-con-huevo-al-hueco",
"title": "Tostada con Huevo al Hueco",
"img": "recipe_057",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"Huevos",
"Sal",
"Orégano"
],
"steps": [
"Hacer un agujero en la rebanada con un vaso",
"Colocar en sartén y poner un huevo en el hueco",
"Tapar y cocinar",
"Tostar el pan sobrante"
],
"nut": "2 rebanadas (62g): 3g carbohidratos, 17g proteínas, 9g fibra, IG 24",
"video": null
},
{
"slug": "pizza-quesadilla",
"title": "Pizza Quesadilla",
"img": "recipe_058",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wraps low carb BOCADO",
"Tomate natural",
"Calabacín",
"Jamón cocido o fiambre de pavo",
"Queso rallado"
],
"steps": [
"Poner toppings sobre un wrap base: tomate, calabacín, jamón y queso",
"Tapar con otro wrap con tomate arriba y abajo",
"Cubrir con más queso rallado",
"Airfryer 15 min a 170°C"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 3g fibra",
"video": "-Wt276b0LDM"
},
{
"slug": "sandwich-de-huevo-al-curry",
"title": "Sandwich de Huevo al Curry",
"img": "recipe_059",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"2 huevos cocidos",
"1 cucharada de queso de untar",
"Especias de curry",
"Sal",
"Lechuga"
],
"steps": [
"Mezclar huevos cocidos, queso de untar, curry y sal",
"Montar el sándwich con el pan, la lechuga y el relleno"
],
"nut": "",
"video": null
},
{
"slug": "panecillos-rellenos-de-atun",
"title": "Panecillos Rellenos de Atún",
"img": "recipe_060",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos",
"1 lata de atún",
"Pepinillos",
"Cebolla",
"Queso crema"
],
"steps": [
"Mezclar todos los ingredientes del relleno",
"Abrir el panecillo a la mitad y rellenar"
],
"nut": "",
"video": null
},
{
"slug": "sandwich-de-pollo",
"title": "Sandwich de Pollo",
"img": "recipe_061",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"2 rebanadas de pan The Original Protein Bread",
"2 pechugas de pollo",
"1 diente de ajo",
"Medio pimiento rojo",
"Sal",
"Orégano",
"2 cucharadas de yogur griego",
"Cebollino"
],
"steps": [
"Hervir 20 min las pechugas con ajo, pimiento, sal y orégano",
"Sacar del agua y triturar",
"Añadir yogur y cebollino a la mezcla",
"Rellenar el sándwich"
],
"nut": "",
"video": "Jn53L0u9n58"
},
{
"slug": "baguette-rellena",
"title": "Baguette Rellena",
"img": "recipe_062",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"Baguette low carb",
"Pesto rojo",
"Huevos",
"Queso azul"
],
"steps": [
"Hacer cortes en la baguette y sacar la miga",
"Rellenar con el resto de ingredientes",
"Hornear"
],
"nut": "",
"video": "N7Wak5W3b38"
},
{
"slug": "taco-burger",
"title": "Taco Burger",
"img": "recipe_063",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"Carne picada",
"Queso",
"Lechuga",
"Tomate",
"Mostaza",
"Ketchup"
],
"steps": [
"Aplastar la carne picada sobre el wrap",
"Cocinar por un lado y tostar por el otro",
"Añadir queso, lechuga, tomate y salsas",
"Doblar a la mitad"
],
"nut": "1 tortilla (40g): 14g carbohidratos, 9g proteínas, 2,5g fibra",
"video": "-LJmgKUqeFA"
},
{
"slug": "sandwich-de-queso-cottage-y-salmon",
"title": "Sandwich de Queso Cottage y Salmón",
"img": "recipe_064",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"2 rebanadas de pan The Original Protein Bread",
"2 cucharaditas de queso cottage",
"1 cucharadita de mostaza Dijon",
"Salmón ahumado",
"Pepino"
],
"steps": [
"Tostar las rebanadas",
"Mezclar queso cottage con mostaza y untar",
"Rellenar con salmón ahumado y pepino"
],
"nut": "",
"video": null
},
{
"slug": "crackers-de-halloween-fantasmas",
"title": "Crackers de Halloween (fantasmas)",
"img": "recipe_065",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wraps low carb",
"Aceite de oliva",
"Sal"
],
"steps": [
"Cortar los wraps con cortador de galletas en forma de fantasma",
"Hacer ojos y boca con una pajita",
"Rociar con aceite y sal en bandeja",
"Hornear con cuidado"
],
"nut": "",
"video": "a1TAIMgboFE"
},
{
"slug": "tostadas-francesas-saladas-ig24",
"title": "Tostadas Francesas Saladas (IG24)",
"img": "recipe_066",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan IG24",
"Jamón cocido",
"Queso",
"Huevo",
"Sal, orégano"
],
"steps": [
"Batir huevo con leche y especias",
"Rellenar dos tostadas con jamón y queso",
"Pasar por la mezcla de huevo",
"Cocinar a la plancha"
],
"nut": "",
"video": null
},
{
"slug": "tiramisu-expres",
"title": "Tiramisú Exprés",
"img": "recipe_067",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan IG24",
"Yogur griego",
"Proteína en polvo sabor vainilla",
"Café",
"Cacao en polvo"
],
"steps": [
"Mezclar yogur griego con proteína en polvo",
"Empapar el pan en café",
"Montar por capas: pan, crema, pan, crema",
"Terminar con cacao en polvo"
],
"nut": "",
"video": null
},
{
"slug": "panecillos-4-quesos",
"title": "Panecillos 4 Quesos",
"img": "recipe_068",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Proteicos",
"Queso crema",
"Queso azul",
"Queso cheddar",
"Queso emmental",
"Hierbas provenzales"
],
"steps": [
"Mezclar quesos crema, azul y cheddar con hierbas provenzales",
"Cortar y vaciar la miga del panecillo",
"Rellenar con la mezcla de quesos",
"Cubrir con emmental",
"Airfryer 10 min a 180°C"
],
"nut": "",
"video": "gfvBm-O32I4"
},
{
"slug": "bocaditos-de-cacao",
"title": "Bocaditos de Cacao",
"img": "recipe_069",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The original protein bread",
"Crema de cacao saludable",
"Huevo",
"Leche"
],
"steps": [
"Quitar la corteza a las rebanadas",
"Rellenar con crema de cacao y avellanas sin azúcar",
"Batir huevo con leche",
"Mojar los bocaditos y cocinar en sartén",
"Terminar con cacao en polvo y sirope sin azúcar"
],
"nut": "",
"video": "GuWVfJtZlCM"
},
{
"slug": "cestitas-con-salmon-y-aguacate",
"title": "Cestitas con Salmón y Aguacate",
"img": "recipe_070",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wraps",
"Salmón ahumado",
"Aguacate",
"Mostaza"
],
"steps": [
"Cortar los wraps en círculos pequeños y hornear en moldes de magdalenas 10 min para formar cestitas",
"Mezclar salmón, aguacate y mostaza para el relleno",
"Rellenar las cestitas"
],
"nut": "",
"video": null
},
{
"slug": "sandwich-navideno",
"title": "Sandwich Navideño",
"img": "recipe_071",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Pan The Original Protein Bread",
"Pesto",
"Jamón cocido"
],
"steps": [
"Untar una rebanada con pesto, jamón cocido y más pesto",
"Cortar la otra rebanada con forma navideña",
"Montar el sándwich"
],
"nut": "",
"video": null
},
{
"slug": "tostada-feta-crunchy",
"title": "Tostada Feta Crunchy",
"img": "recipe_072",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Huevo",
"Queso feta"
],
"steps": [
"Cocinar el huevo a la plancha sobre la tostada",
"Agregar queso feta en los bordes hasta que quede crujiente"
],
"nut": "1 unidad: 20g proteína, 1g carbohidratos, 4g fibra (aprox)",
"video": null
},
{
"slug": "pancakes-sweet-protein-chocolate",
"title": "Pancakes Sweet Protein Chocolate",
"img": "recipe_073",
"product": "sweet-protein-chocolate",
"cat": "Sweet Protein Chocolate",
"ing": [
"1 taza de mezcla Sweet Protein Chocolate",
"1 taza de leche (la que prefieras)",
"1 huevo",
"1 cucharada de aceite neutro"
],
"steps": [
"Mezclar todos los ingredientes hasta integrar",
"Cocinar en sartén como pancakes tradicionales"
],
"nut": "Más del doble de proteína que unos pancakes clásicos, sin azúcar agregada, alto en fibra",
"video": null
},
{
"slug": "nachos-con-guacamole",
"title": "Nachos con Guacamole",
"img": "recipe_074",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"2 Wraps Low Carb",
"Aceite de oliva virgen extra",
"Pimentón dulce",
"Queso rallado",
"Condimentos al gusto (picante, ajo en polvo, orégano)"
],
"steps": [
"Cortar los wraps en 8 triángulos cada uno",
"Mezclar en un bol con AOVE, pimentón dulce y queso rallado",
"Separar bien en una fuente para horno",
"Hornear al máximo por 3 minutos",
"Servir con guacamole"
],
"nut": "Con 2 wraps (16 nachos): 18g proteína, 5g fibra",
"video": null
},
{
"slug": "mona-mix-vainilla",
"title": "Mona Mix Vainilla",
"img": "recipe_075",
"product": "sweet-protein-chocolate",
"cat": "Sweet Protein Chocolate",
"ing": [
"3 huevos",
"2 cucharadas de aceite vegetal",
"1 1/2 taza de leche o bebida vegetal",
"2 tazas de mezcla Sweet Protein Chocolate"
],
"steps": [
"Batir los huevos hasta espumar",
"Añadir el aceite en forma de hilo mientras se bate",
"Añadir la mezcla Sweet Protein Chocolate y la leche, integrando con espátula",
"Hornear 30-45 minutos a 180°C",
"Dejar enfriar y decorar"
],
"nut": "20% proteína, sin azúcares añadidos",
"video": null
},
{
"slug": "hamburguesa-vegana",
"title": "Hamburguesa Vegana",
"img": "recipe_076",
"product": "mezcla-picada-vegetal-150",
"cat": "Picada Vegetal",
"ing": [
"Pan de Hamburguesa Low Carb",
"100g de Mezcla de Picada Vegetal",
"200ml de agua",
"Vegetales a gusto",
"Aceite de oliva",
"Sal",
"Comino en polvo",
"Mayonesa o toppings a gusto"
],
"steps": [
"Picar los vegetales y cocinarlos en sartén con aceite de oliva, sal y comino",
"Mezclar 100g de Picada Vegetal con 200ml de agua y los vegetales cocidos",
"Mezclar hasta unificar y llevar a la nevera 30 minutos para hidratar",
"Formar 2 hamburguesas con la mezcla",
"Tostar el Pan de Hamburguesa Low Carb",
"Armar con los toppings elegidos"
],
"nut": "1 hamburguesa: 30g proteína, menos de 2g azúcares, 11g fibra",
"video": null
},
{
"slug": "huevo-poche-sobre-tostada",
"title": "Huevo Poché sobre Tostada",
"img": "recipe_077",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Aguacate",
"Huevo",
"Aceite de oliva virgen extra"
],
"steps": [
"Tostar el pan y untar con aguacate pisado",
"Forrar un vaso con papel film y un poco de AOVE",
"Romper un huevo dentro y cerrar bien enroscando las puntas",
"Hervir agua en un cazo y sumergir el huevo sujeto con una pinza",
"Cocinar 4-5 minutos",
"Servir sobre la tostada de aguacate"
],
"nut": "15g proteína, ácidos grasos Omega 3, alto en fibra, bajo en carbohidratos",
"video": null
},
{
"slug": "desayuno-3-ingredientes",
"title": "Desayuno 3 Ingredientes",
"img": "recipe_078",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"1 Panecillo Low Carb",
"30g de mozzarella rallada",
"1 huevo grande"
],
"steps": [
"Hacer un hueco en el panecillo",
"Rellenar con la mozzarella rallada y el huevo",
"Hornear"
],
"nut": "30g de proteína, muy bajo en hidratos de carbono",
"video": null
},
{
"slug": "tostadas-virales",
"title": "Tostadas Virales",
"img": "recipe_079",
"product": null,
"cat": "Pan Bio",
"ing": [
"2 rebanadas de Pan Bio",
"1/2 aguacate maduro",
"1/4 de pepino",
"1 cucharada grande de hummus",
"Un puñado de ensalada",
"5 tomates cherry",
"5 olivas kalamata",
"1 lata de atún al natural"
],
"steps": [
"Tostar las rebanadas de Pan Bio",
"Picar todos los ingredientes",
"Montar la tostada con el hummus como base y el resto de ingredientes encima"
],
"nut": "35g de proteína, ideal post entreno",
"video": null
},
{
"slug": "merienda-para-ninos",
"title": "Merienda para Niños",
"img": "recipe_080",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"Wrap Low Carb",
"1 huevo",
"Canela en polvo",
"Jengibre en polvo",
"1 cucharadita de endulzante (eritritol)",
"Queso untable bajo en grasas",
"Puré de manzana natural"
],
"steps": [
"Batir el huevo con canela y jengibre en polvo",
"Incorporar el endulzante",
"Cortar los wraps en formas divertidas o triángulos",
"Remojar los wraps en el huevo batido",
"Hornear u airfryer 5-7 minutos",
"Dejar enfriar hasta que estén crocantes",
"Batir el queso untable con puré de manzana y endulzante",
"Decorar con canela y servir con la mezcla de queso como dip"
],
"nut": "Snack alto en proteína, bajo en azúcares, apto para niños",
"video": null
},
{
"slug": "tostadas-de-colores",
"title": "Tostadas de Colores",
"img": "recipe_081",
"product": null,
"cat": "Pan Bio",
"ing": [
"Pan Bio",
"Queso cottage",
"Higos frescos",
"Nueces",
"Aguacate",
"Fresas"
],
"steps": [
"Tostar el Pan Bio",
"Primera tostada: cubrir con queso cottage, higos frescos y nueces",
"Segunda tostada: cubrir con aguacate y fresas"
],
"nut": "Pan Bio: 25,4g proteína por 100g. Queso cottage: 14g proteína por 100g",
"video": null
},
{
"slug": "galletas-sweet-protein",
"title": "Galletas Sweet Protein",
"img": "recipe_082",
"product": "sweet-protein-chocolate",
"cat": "Sweet Protein Chocolate",
"ing": [
"1 taza de mezcla Sweet Protein Chocolate",
"1 cucharada de crema de cacahuetes",
"1 chorrito de AOVE (opcional)",
"6 cucharadas de leche"
],
"steps": [
"Integrar todos los ingredientes con espátula y luego con las manos",
"Dar forma a las galletas",
"Hornear 8 minutos a 200°C",
"Opcional: bañar en chocolate"
],
"nut": "Casi 40g de proteína, sin azúcares añadidos, rica en fibra y grasas saludables",
"video": null
},
{
"slug": "croissants-de-chocolate",
"title": "Croissants de Chocolate",
"img": "recipe_083",
"product": null,
"cat": "Protein Choco Spread",
"ing": [
"Masa de hojaldre",
"Protein Choco Spread"
],
"steps": [
"Untar una capa de masa de hojaldre con Protein Choco Spread",
"Cubrir con más masa de hojaldre",
"Cortar en triángulos",
"Enrollar como croissants",
"Hornear 15 minutos"
],
"nut": "Protein Choco Spread: 20% proteína, sin azúcares añadidos",
"video": null
},
{
"slug": "tortilla-express-para-llevar",
"title": "Tortilla Express para Llevar",
"img": "recipe_084",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"1 huevo",
"Queso mozzarella rallado",
"Espinacas frescas",
"1 Wrap Low Carb"
],
"steps": [
"Calentar una sartén con aceite y batir el huevo directamente en ella",
"Agregar la mozzarella y las espinacas",
"Colocar el wrap encima y cocinar 1 minuto más"
],
"nut": "Comida rápida alta en proteína, ideal para llevar",
"video": null
},
{
"slug": "ensalada-para-llevar-en-wrap",
"title": "Ensalada para Llevar en Wrap",
"img": "recipe_085",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"1 Wrap Proteico",
"1/2 aguacate",
"Tomates cherry",
"Mango",
"1 lata de atún al natural",
"Condimentos a gusto"
],
"steps": [
"Picar el aguacate, los tomates cherry y el mango",
"Mezclar con el atún y los condimentos",
"Rellenar el wrap con la ensalada y enrollar"
],
"nut": "Ensalada fresca para llevar, alta en nutrientes",
"video": null
},
{
"slug": "helado-proteico-de-chocolate",
"title": "Helado Proteico de Chocolate",
"img": "recipe_086",
"product": null,
"cat": "Protein Choco Spread",
"ing": [
"200g de queso cottage",
"200g de Protein Choco Spread"
],
"steps": [
"Procesar ambos ingredientes juntos",
"Verter en moldes de helado",
"Congelar"
],
"nut": "28g de proteína por helado, muy bajo en hidratos",
"video": null
},
{
"slug": "bocadillo-playero",
"title": "Bocadillo Playero",
"img": "recipe_087",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"1 Panecillo Protein Bread",
"1/4 de aguacate",
"1 huevo duro",
"Jamón serrano",
"Queso bajo en grasas",
"Canónigos",
"Tomate cherry"
],
"steps": [
"Cortar el panecillo a la mitad",
"Rellenar con el aguacate, huevo duro en rodajas, jamón, queso, canónigos y tomate cherry"
],
"nut": "Bocadillo completo, alto en proteína",
"video": null
},
{
"slug": "tupper-triple-de-protein-bread",
"title": "Tupper Triple de Protein Bread",
"img": "recipe_088",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"3 rebanadas de Protein Bread",
"Queso light",
"1/4 de aguacate",
"Pavo",
"1 huevo a la plancha",
"Rodajas de tomate",
"Fruta fresca (para acompañar)"
],
"steps": [
"Armar la primera capa con queso light, aguacate y pavo",
"Añadir la segunda capa con huevo a la plancha y tomate",
"Cerrar el sándwich triple",
"Guardar en tupper con fruta fresca"
],
"nut": "3 rebanadas de pan aportan 22,5g de proteína",
"video": null
},
{
"slug": "burger-de-camping",
"title": "Burger de Camping",
"img": "recipe_089",
"product": "mezcla-pan-de-hamburguesa",
"cat": "Pan de Hamburguesa",
"ing": [
"Pan de Hamburguesa Low Carb Bocado",
"Carne de ternera ecológica",
"Ensalada de lentejas y vegetales",
"Queso mozzarella fresco"
],
"steps": [
"Cocinar la hamburguesa de carne a la parrilla o sartén",
"Preparar la ensalada de lentejas y vegetales",
"Armar la burger con el pan, la carne, el queso mozzarella y la ensalada"
],
"nut": "Pan de Hamburguesa Low Carb, alto en proteína para recuperación muscular",
"video": null
},
{
"slug": "bruschettas-de-pesto-mozzarella-y-jamon-serrano",
"title": "Bruschettas de Pesto, Mozzarella y Jamón Serrano",
"img": "recipe_090",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"1 baguette low carb",
"Aceite de oliva",
"2 cucharadas de pesto",
"2 puñados de queso mozzarella rallado",
"Jamón serrano"
],
"steps": [
"Cortar la baguette en rebanadas",
"Untar con pesto y aceite de oliva",
"Cubrir con mozzarella rallada y jamón serrano",
"Hornear hasta gratinar",
"Servir con uvas, pasas y frutos secos"
],
"nut": "Receta con solo 4 ingredientes",
"video": null
},
{
"slug": "merienda-vuelta-al-cole",
"title": "Merienda Vuelta al Cole",
"img": "recipe_091",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos Low Carb",
"Protein Choco Spread",
"Fresas, plátano o arándanos"
],
"steps": [
"Cortar el panecillo a la mitad",
"Untar ambas mitades con Protein Choco Spread",
"Cubrir con fruta en rodajas"
],
"nut": "Sin azúcares añadidos, alta en proteína y fibra",
"video": null
},
{
"slug": "tupper-para-toda-la-familia",
"title": "Tupper para Toda la Familia",
"img": "recipe_092",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"The Original Protein Bread",
"Judías redondas",
"Zanahoria",
"Pepino",
"Queso fresco",
"Aguacate",
"1 lata de atún al natural",
"Yogur griego natural",
"Tomates cherry"
],
"steps": [
"Saltear las judías en sartén con aceite de oliva y reservar",
"Rallar la zanahoria y el pepino",
"Mezclar el queso fresco con el aguacate pisado",
"Incorporar el atún y las judías",
"Untar el pan con yogur griego natural",
"Rellenar con la preparación y acompañar con tomates cherry"
],
"nut": "28% de la proteína diaria requerida, 15% de fibra",
"video": null
},
{
"slug": "tostadas-virales-de-pan-ig24",
"title": "Tostadas Virales de Pan IG24",
"img": "recipe_093",
"product": "pan-ig24",
"cat": "Pan IG24",
"ing": [
"2 claras",
"2 huevos enteros",
"2 rebanadas de Pan IG24",
"Aguacate",
"Tomate"
],
"steps": [
"Batir las claras y los huevos para hacer una tortilla en sartén caliente",
"Colocar las 2 rebanadas de pan encima de la tortilla",
"Dar vuelta para terminar de cocinar",
"Agregar aguacate y tomate antes de doblar y servir"
],
"nut": "37g de proteína. 2 rebanadas de Pan IG24: 17g proteína, 3g hidratos, 9g fibra",
"video": null
},
{
"slug": "mantequilla-saludable-de-aove",
"title": "Mantequilla Saludable de AOVE",
"img": "recipe_094",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Aceite de Oliva Virgen Extra",
"Panecillos IG24",
"Tomate",
"Albahaca"
],
"steps": [
"Poner el AOVE en un recipiente y congelar unas 3 horas hasta que espese",
"Untar sobre los panecillos",
"Terminar con tomate y albahaca (o especias a gusto)"
],
"nut": "Snack bajo en hidratos, alto en proteínas y grasas saludables",
"video": null
},
{
"slug": "nyc-salmon-bagel",
"title": "NYC Salmon Bagel",
"img": "recipe_095",
"product": "protein-bagel",
"cat": "Protein Bagel",
"ing": [
"1 Protein Bagel",
"2 cucharadas de queso untable",
"Eneldo",
"Canónigos",
"Pepino",
"1/2 aguacate",
"Salmón ahumado"
],
"steps": [
"Abrir el bagel y tostarlo",
"Mezclar el queso untable con el eneldo",
"Untar el queso en ambas mitades del bagel",
"Agregar canónigos, aguacate en rodajas, salmón y pepino"
],
"nut": "40g de proteína",
"video": null
},
{
"slug": "canastillas-de-bolognesa",
"title": "Canastillas de Bolognesa",
"img": "recipe_096",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"Protein Bread",
"2 cucharadas de salsa bolognesa por rebanada",
"Queso parmesano"
],
"steps": [
"Estirar y aplanar las rebanadas de pan con un palo de amasar",
"Disponer las rebanadas sobre un molde de magdalenas formando canastillas",
"Agregar la salsa bolognesa y el queso parmesano",
"Hornear a 200°C por 10 minutos"
],
"nut": "28% de proteína",
"video": null
},
{
"slug": "bagel-con-55g-de-proteina",
"title": "Bagel con 55g de Proteína",
"img": "recipe_097",
"product": "protein-bagel",
"cat": "Protein Bagel",
"ing": [
"1 Protein Bagel",
"2 huevos",
"2 lonchas de queso cheddar",
"40g de pavo",
"1/2 tomate"
],
"steps": [
"Abrir el bagel y tostarlo (opcional)",
"Batir los huevos y cocinar en sartén como tortilla",
"Añadir el cheddar sobre la tortilla y doblar",
"Armar el bagel con el huevo, queso, pavo y tomate en rodajas"
],
"nut": "55g de proteína, menos de 10g de carbohidratos, 25g de fibra",
"video": null
},
{
"slug": "muffins-de-halloween-con-frosting-de-calabaza",
"title": "Muffins de Halloween con Frosting de Calabaza",
"img": "recipe_098",
"product": "sweet-protein-chocolate",
"cat": "Sweet Protein Chocolate",
"ing": [
"500g de Sweet Protein Chocolate",
"4 huevos",
"60ml de agua caliente",
"200g de aceite vegetal",
"Canela (opcional)",
"4 cucharadas de calabaza asada",
"3 cucharadas de queso mascarpone"
],
"steps": [
"Mezclar la mezcla Sweet Protein Chocolate con huevos, agua caliente, aceite y canela",
"Hornear a 160°C por 15 minutos",
"Dejar enfriar",
"Mezclar la calabaza asada con el mascarpone hasta homogeneizar",
"Cubrir los muffins con el frosting"
],
"nut": "Muffins especiados sin chucherías procesadas",
"video": null
},
{
"slug": "apple-pie-express-en-wrap",
"title": "Apple Pie Express en Wrap",
"img": "recipe_099",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"2 Wraps Low Carb",
"1 manzana Fuji",
"1 cucharada de sirope de agave (o eritritol)",
"Canela y jengibre",
"1 cucharada de aceite de coco virgen"
],
"steps": [
"Cortar la manzana en cubos pequeños",
"Mezclar en un bol apto para microondas con aceite de coco, canela, jengibre y sirope",
"Microondas 2 minutos hasta que estén tiernas",
"Dejar entibiar",
"Rellenar los wraps con la mezcla, reservando el líquido",
"Decorar con el líquido restante"
],
"nut": "Listo en menos de 5 minutos",
"video": null
},
{
"slug": "shakshuka-con-protein-bread",
"title": "Shakshuka con Protein Bread",
"img": "recipe_100",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"1 rebanada de Protein Bread",
"4 tomates pequeños maduros",
"2 pimientos rojos",
"1 cebolla",
"2 huevos",
"Perejil picado",
"Sal, pimienta, comino, ajo en polvo, pimentón dulce",
"Aceite de oliva virgen extra"
],
"steps": [
"Picar los vegetales",
"Calentar una sartén con AOVE y los condimentos",
"Cocinar los vegetales tapados 20 minutos hasta que estén tiernos",
"Aplastar los vegetales, crear dos huecos y romper los huevos dentro",
"Tapar y cocinar los huevos 3 minutos",
"Decorar con perejil y servir con el Protein Bread"
],
"nut": "25g de proteína con solo 350 kcal, baja en hidratos, alta en fibra",
"video": null
},
{
"slug": "bagel-con-huevo-y-yema-jugosa",
"title": "Bagel con Huevo y Yema Jugosa",
"img": "recipe_101",
"product": "protein-bagel",
"cat": "Protein Bagel",
"ing": [
"1 Protein Bagel",
"1 huevo (clara y yema separadas)",
"1/2 aguacate",
"Tomate"
],
"steps": [
"Cocinar la clara de huevo en sartén con un poco de aceite, colocando encima la mitad superior del bagel",
"Poner la yema en el agujero del bagel y dejar cocinar",
"Tostar la otra mitad del bagel en la misma sartén",
"Armar el bagel con aguacate, tomate y la tapa con clara y yema"
],
"nut": "Más de 30g de proteína, ácidos grasos Omega 9, 20g de fibra",
"video": null
},
{
"slug": "conos-de-espinaca-y-ricota",
"title": "Conos de Espinaca y Ricota",
"img": "recipe_102",
"product": "wrap-low-carb",
"cat": "Wrap Low Carb",
"ing": [
"3 Protein Wraps (en mitades)",
"200g de ricota",
"3 manojos de espinaca fresca",
"Bacon",
"Queso mozzarella rallado",
"Sal, aceite y pimienta"
],
"steps": [
"Armar conos con las mitades de wrap, sujetando con un palillo",
"Hornear 10 minutos con un poco de aceite hasta dorar",
"Saltear las espinacas con el bacon",
"Mezclar con la ricota, sal, pimienta y mozzarella",
"Rellenar los conos con la mezcla"
],
"nut": "Entrante para compartir en familia",
"video": null
},
{
"slug": "bagel-navideno-de-reno",
"title": "Bagel Navideño de Reno",
"img": "recipe_103",
"product": "protein-bagel",
"cat": "Protein Bagel",
"ing": [
"1 Protein Bagel Soft",
"Crema de cacahuete",
"Plátano",
"Fresa",
"Arándanos",
"Almendras"
],
"steps": [
"Rellenar el bagel con crema de cacahuete en ambas mitades",
"Agregar rodajas de plátano y cerrar",
"Decorar como reno: nariz de fresa, ojos con crema de cacahuete y arándanos, cuernos de almendras"
],
"nut": "Desayuno festivo alto en proteína",
"video": null
},
{
"slug": "queso-navideno-relleno-de-pistachos-y-arandanos",
"title": "Queso Navideño Relleno de Pistachos y Arándanos",
"img": "recipe_104",
"product": "baguettes-low-carb",
"cat": "Baguette Low Carb",
"ing": [
"Baguette Low Carb",
"Queso untable firme y cremoso",
"Pistachos",
"Pasas de arándanos",
"Semillas varias"
],
"steps": [
"Cortar la baguette en rodajas (tostar opcional, 5 minutos al horno)",
"Picar los pistachos y arándanos, reservando 2/3",
"Mezclar el resto con semillas varias",
"Mezclar con el queso untable",
"Formar un rollo sobre papel film, compactando bien",
"Cubrir el rollo con los pistachos, arándanos y semillas reservados",
"Refrigerar antes de servir"
],
"nut": "Queso untable navideño para compartir",
"video": null
},
{
"slug": "barquetas-de-jamon-y-queso",
"title": "Barquetas de Jamón y Queso",
"img": "recipe_105",
"product": "panecillos-low-carb",
"cat": "Panecillo Proteico",
"ing": [
"Panecillos IG24",
"1 huevo",
"Jamón dulce",
"Queso",
"Orégano o albahaca (opcional)"
],
"steps": [
"Batir el huevo con el jamón y el queso",
"Hacer un corte en el panecillo para rellenar",
"Rellenar el panecillo",
"Hornear a 200°C por 15 minutos"
],
"nut": "Alto en proteínas, muy bajo en hidratos de carbono",
"video": null
},
{
"slug": "french-toast-de-ano-nuevo",
"title": "French Toast de Año Nuevo",
"img": "recipe_106",
"product": "the-original-protein-bread",
"cat": "The Original Protein Bread",
"ing": [
"2 rebanadas de Protein Bread",
"2 cucharaditas de crema de cacahuete",
"Arándanos frescos (o mermelada sin azúcar)",
"1 huevo",
"Un chorrito de leche",
"1 cucharadita de endulzante",
"Canela, vainilla o cacao en polvo (opcional)"
],
"steps": [
"Untar las rebanadas con crema de cacahuete y poner arándanos en el centro",
"Cerrar el bocadillo",
"Batir el huevo con el endulzante, los opcionales y la leche",
"Mojar ambos lados del bocadillo y aplastar los bordes con un tenedor",
"Dejar reposar unos minutos en la mezcla",
"Cocinar en sartén caliente con aceite de coco, vuelta y vuelta"
],
"nut": "Desayuno alto en proteína, 6 ingredientes",
"video": null
},
{
"slug": "bocata-de-pollo-bbq-con-cole-slaw",
"title": "Bocata de Pollo BBQ con Cole Slaw",
"img": "recipe_107",
"product": "mezcla-pan-de-hamburguesa",
"cat": "Pan de Hamburguesa",
"ing": [
"Pan de Hamburguesa Low Carb",
"Contramuslo de pollo deshuesado y sin piel",
"Salsa BBQ sin azúcar añadido",
"Comino en polvo",
"Agave",
"Col en juliana",
"Manzana roja rallada",
"Pepino rallado",
"Zanahoria rallada",
"Remolacha rallada",
"Mayonesa light",
"Zumo de limón",
"AOVE",
"Sal"
],
"steps": [
"Marinar el pollo con salsa BBQ, comino y agave",
"Cocinar a la plancha hasta que esté tierno y jugoso",
"Mezclar la mayonesa light con zumo de limón, sal, agave y AOVE",
"Combinar con los vegetales rallados para el cole slaw",
"Armar el bocata con el pan, el pollo y el cole slaw, con queso gratinado"
],
"nut": "Listo en 15 minutos",
"video": null
},
{
"slug": "tostada-nube-huevos-nube",
"title": "Tostada Nube (Huevos Nube)",
"img": "recipe_108",
"product": "pan-ig24",
"cat": "Pan IG24",
"ing": [
"1 huevo",
"1 rebanada de Pan IG24",
"Queso parmesano (opcional)",
"Espinacas crudas (opcional)"
],
"steps": [
"Separar la clara de la yema",
"Batir las claras con una pizca de sal hasta formar una espuma firme y brillante",
"Colocar las claras sobre una placa de horno aceitada, formando un círculo con un hueco en el medio",
"Poner la yema en el hueco",
"Hornear a temperatura fuerte hasta cocinar, cuidando que la yema no se pase",
"Montar sobre la tostada de Pan IG24"
],
"nut": "Receta baja en hidratos, solo 2 ingredientes base",
"video": null
}
];
