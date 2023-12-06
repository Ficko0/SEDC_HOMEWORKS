console.log("PROMPTTT");

let moneyMaximum = 15000;
let moneyMid = 10000;
let moneyLeast = 1000;

let moneyInput = parseInt(prompt("Vnesete kolku pari imate"))

if (moneyInput >= moneyMaximum) {
    alert("PRAI SHO SAKASH")
}

else if (moneyInput <= moneyLeast) {
    alert("ODI MOLI DA TI DAAT USHTE")
}

else if (moneyInput <= moneyMid) {
    alert("OLABAVI SO TROSHENJE")
}




