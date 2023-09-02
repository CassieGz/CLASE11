// Ejercicios de repaso de condicionales
// Con el condicional IF simularás una heladería.
// Tendrás cuatro variables. Las variables topping, precio y precioFinal que no tendrán un valor 
// asignado por el momento y tendrás la variable helado, que le asignarás el valor numérico
// A la variable precioFinal, la actualizaremos al final con la suma del precio del helado más el precio 
// del topping y tendrá un mensaje diciendo “"El helado cuesta $" + precioFinal”
// que vos quieras.
// Si el topping es Oreo, el precio será de $10.
// Si el topping es KitKat, el precio será de $15.
// Si el topping es Kinder, el precio será de $25.
// Si el topping no es ninguno de los anteriores, poné un mensaje que diga “No tenemos este topping”.

let helado= 950;
let topping= prompt("Elija un topping");
let precio;
let precioFinal;

  if (topping == "oreo"){
        precio=parseInt("10");
        console.log(precio);
  }else if (topping == "kitkat"){
        precio=parseInt("15");
        console.log(precio);
  }else if (topping == "kinder"){
        precio=parseInt("25");
        console.log(precio);  
  } else {
        precio= 0;
        console.log("No tenemos ese topping");
        
}

precioFinal= helado + precio;
precioFinal= "El helado cuesta $ " + precioFinal;
console.log(precioFinal);

// Con el condicional SWITCH simularás un pedido.
// El cliente puede pedir menú de carne, pescado o verdura.
// Si no elige nada del menú, le dirá la frase elija carne, pescado o verdura.
// Si pide carne se le ofrecerá como bebida vino tinto.
// Si pide pescado se le ofrecerá vino blanco.
// Si pide verdura se le ofrecerá agua.

var menu=prompt("Elija un menú: carne, pescado o verdura");

switch (menu) {
  case "carne":
    console.log("¿Desea acompañar su pedido con vino tinto?");
    break;
  case "pescado":
    console.log("¿Desea acompañar su pedido con vino blanco?");
    break;
  case "verdura":
    console.log("¿Desea acompañar su elección con agua?");
    break;
  default:
    console.log("Elija carne,pescado o verdura");
}


// Harás una variable que contenga un array de datos, y con el ciclo FOR lo recorrerás. 
// Luego insertarás un elemento con las propiedades aprendidas en clase, y lo volverás a recorrer.

let arrayNombres = ["Frida","Mali","Fru"];

for(i=0 ;i<arrayNombres.length;i++){
console.log(arrayNombres);
 console.log(arrayNombres[i]);
}

arrayNombres.push("Princesa");

for(i=0 ;i<arrayNombres.length;i++){
console.log(arrayNombres);
 console.log(arrayNombres[i]);
}

// Con WHILE lo que harás será que, mientras el número sea menor que 11, dirá la frase 
// “numero es más chico que 11”, siendo “numero” el valor de tu variable. Recordá hacer incremental 
// la variable para que no quede en un bucle infinito

let numero=1;
while (numero<11){
  console.log("numero es mas chico que 11");
  console.log(numero);
  numero++;
}