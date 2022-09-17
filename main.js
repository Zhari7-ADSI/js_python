let parc1 = parseInt(prompt("Ingrese la nota del parcial 1"));
let parc2 = parseInt(prompt("Ingrese la nota del parcial 2"));
let parc3 = parseInt(prompt("Ingrese la nota del parcial 3"));
let exFinal = parseInt(prompt("Ingrese la nota del examen final"));
let trabFinal = parseInt(prompt("Ingrese la nota del trabajo final"));

let promFinal = ((parc1 + parc2 + parc3)/3) * 0.55;
let promEx = exFinal *0.3;
let promTrab =trabFinal * 0.15; 
let promMate = (promFinal + promEx + promTrab)/3;

document.getElementById('promFinal').innerHTML=promFinal;
document.getElementById('promMate').innerHTML=promMate;
document.getElementById('promEx').innerHTML=promEx;
document.getElementById('promTrab').innerHTML=promTrab;
