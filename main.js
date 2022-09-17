let nota1 = parseInt(prompt("Ingrese la nota 1"));
let nota2 = parseInt(prompt("Ingrese la nota 2"));
let nota3 = parseInt(prompt("Ingrese la nota 3"));
let nota4 = parseInt(prompt("Ingrese la nota 4"));

let prom = (nota1 + nota2 + nota3 + nota4) /4;

document.getElementById('prom').innerHTML=prom;