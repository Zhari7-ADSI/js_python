let a = parseFloat(prompt("Ingrese el número de la a"));
let b = parseFloat(prompt("Ingrese el número de la b"));
let c = parseFloat(prompt("Ingrese el número de la c"));
const x = 7;

let oper = a * Math.pow(x,2) +b * x + c;

document.getElementById('oper').innerHTML=oper;