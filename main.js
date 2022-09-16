let pi = Math.PI;
let radio = parseFloat(prompt("Ingrese el radio"));
let altura = parseFloat(prompt("Ingrese la altura"));

let area = (2 * (pi * Math.pow(radio,2))) + ((2 * pi * radio) * altura);
let volumen = (pi * Math.pow(radio,2)) * altura;

document.getElementById('area').innerHTML=area;
document.getElementById('volumen').innerHTML=volumen;