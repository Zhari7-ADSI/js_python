let kms = parseInt(prompt("Ingrese la cantidad de kilometros"));;
let hrs = parseInt(prompt("Ingrese la cantidad de horas"));

let m= kms * 1000;
let s = hrs * 3600;
let vel = m/s;

document.getElementById('m').innerHTML=m + "m";
document.getElementById('s').innerHTML=s + "seg";
document.getElementById('vel').innerHTML=vel + "m/s";