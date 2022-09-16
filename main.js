let min = 355;
let cant = parseFloat(prompt("Ingrese la cantidad de minutos"));

let resul = cant * min;
let subt = resul * 0.19;
let total = resul + subt;

document.getElementById('subt').innerHTML=subt;
document.getElementById('total').innerHTML=total;