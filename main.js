let iva = parseInt(prompt("Ingrese el iva sin el porcentaje"));
let prod = parseInt(prompt("Ingrese el precio del producto "));

let pago = (iva/100) * prod;
let pagTot = pago + prod;

document.getElementById('pago').innerHTML=pago;
document.getElementById('pagTot').innerHTML=pagTot;