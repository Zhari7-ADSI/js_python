let vent1 = parseInt(prompt("Ingrese el valor de la venta 1"));
let vent2 = parseInt(prompt("Ingrese el valor de la venta 2"));
let vent3 = parseInt(prompt("Ingrese el valor de la venta 3"));
let sueld = parseInt(prompt("Ingrese su sueldo"));

let iva = (vent1 + vent2 + vent3) *0.10;
let sueldo = iva + vent1 + vent2 + vent3 + sueld;

document.getElementById('iva').innerHTML=iva;
document.getElementById('sueldo').innerHTML=sueldo;