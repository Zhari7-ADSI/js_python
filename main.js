let pi = Math.PI;
let radio = parseFloat(prompt("Ingrese el radio"));

let volumen = 4/3 * pi * Math.pow(radio, 3);

document.getElementById('volumen').innerHTML=volumen;