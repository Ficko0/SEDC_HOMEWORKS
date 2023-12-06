console.log("DOMASHNA SEDC");

let yearInput = parseInt(prompt("Enter a year of choice"))
let zodiacCalc = (yearInput - 4) % 12;

let value0 = "Rat";
let value1 = "Ox";
let value2 = "Tiger";
let value3 = "Rabbit";
let value4 = "Dragon";
let value5 = "Snake";
let value6 = "Horse";
let value7 = "Goat";
let value8 = "Monkey";
let value9 = "Rooster";
let value10 = "Dog";
let value11 = "Pig";

if (zodiacCalc == 11) {
    alert(value11)
}
else if (zodiacCalc == 10) {
    alert(value10)
}
else if (zodiacCalc == 9) {
    alert(value9)
}
else if (zodiacCalc == 8) {
    alert(value8)
}
else if (zodiacCalc == 7) {
    alert(value7)
}
else if (zodiacCalc == 6) {
    alert(value6)
}
else if (zodiacCalc == 5) {
    alert(value5)
}
else if (zodiacCalc == 4) {
    alert(value4)
}
else if (zodiacCalc == 3) {
    alert(value3)
}
else if (zodiacCalc == 2) {
    alert(value2)
}
else if (zodiacCalc == 1) {
    alert(value1)
}
else if (zodiacCalc == 0) {
    alert(value0)
}


