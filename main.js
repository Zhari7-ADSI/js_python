let grados = parseInt(prompt("Ingrese los grados celsius"));

let fahren = (grados * (9/5)) + 32;

document.getElementById('fahren').innerHTML=fahren;
document.getElementById('grados').innerHTML=grados;
