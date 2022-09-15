
let numero1 = parseInt(prompt("Introduzca el número"));
let numero2 = parseInt(prompt("Introduzca el número"));

let suma = numero1+numero2;
let resta = numero1-numero2;
let multi = numero1*numero2;
let divi = numero1/numero2;

document.getElementById('suma').innerHTML+=suma;
document.getElementById('resta').innerHTML+=resta;
document.getElementById('multi').innerHTML+=multi;
document.getElementById('divi').innerHTML+=divi;

