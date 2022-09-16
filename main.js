let med = parseInt(prompt("Ingrese el costo del medicamento"));

let descuento= med * 0.10;
let pFin =  med - descuento;

document.getElementById('descuento').innerHTML=descuento;
document.getElementById('pFin').innerHTML=pFin;
