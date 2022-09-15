let pi = Math.PI;
let radio = parseFloat(prompt("Introduzca el radio"));

let area = pi*Math.pow(radio,2);
let long = 2*pi*radio;

document.getElementById('area').innerHTML=area;
document.getElementById('long').innerHTML=long;

