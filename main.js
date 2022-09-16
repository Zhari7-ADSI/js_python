let a = parseInt(prompt("Ingrese el número de a"));
let b = parseInt(prompt("Ingrese el número de b"));
let c = parseInt(prompt("Ingrese el número de c"));

let expresion =  (a+7*c)/(b+2-a)+2*b;

document.getElementById('expresion').innerHTML=expresion;