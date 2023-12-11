console.log("Hello");

function nekakvaFunkcija() {
    console.log( new Date().toLocaleString() ); 
}

// vaka se pishuva odnosno se deklarira funkcija

nekakvaFunkcija();

// vaka se povikuva za da se pechati negde kaj shto sakame

function sayHello() {
    document.write("Hello world")
}

sayHello();

// function funkcija2(nekakovParametar) {
    // document.write(nekakovParametar)
// }

// let print = prompt("Vnesi nekakov zbor")
// funkcija2(print);

function multiplyNumbers(a, b) {
    let result = a * b;
    console.log(result);
    return result;
}

let resultOfMultiplying = multiplyNumbers(100, 100);

console.log(resultOfMultiplying);
console.log(multiplyNumbers(25, 25));

// let broj1 = parseInt(prompt("Vnesete broj"));
// let broj2 = parseInt(prompt("Vnesete vtor broj"));

// alert(`Rezultatot od ovie dva broja e ${multiplyNumbers(broj1, broj2)}`);

function numberReturner(nekakovString) {
    let numberToReturn = parseInt(nekakovString);

    if(isNaN(numberToReturn)) {
        alert("Vnesete validen broj vo poleto");
        return 0;
    }
    
    if(numberToReturn > 100) {
        alert("Vnesete pomal broj od 100");
        return;
    }

    return numberToReturn;
}

let promptNekakov = prompt("Vnesete broj1");

let brojOdPromptNekakov = numberReturner(promptNekakov);
console.log(brojOdPromptNekakov);

