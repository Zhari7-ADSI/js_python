let pi = Math.PI;
let a = parseFloat(prompt("Ingrese el número de la a"));
let b = parseFloat(prompt("Ingrese el número de la b"));
let c = parseFloat(prompt("Ingrese el número de la c"));

let vol = (4/3) *pi * a * b * c;

document.getElementById('vol').innerHTML=vol;