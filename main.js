let nom = prompt("Ingrese el nombre del empleado ");
let hrsTrab = parseInt(prompt("Ingrese las horas trabajadas "));
let hora = 15300;

let pago = hrsTrab * hora;

document.getElementById('pago').innerHTML=pago;
document.getElementById('nom').innerHTML=nom;
document.getElementById('hrsTrab').innerHTML=hrsTrab;