// let humanAgeInput = parseInt(prompt("Enter human years"));

// function dogAgeConversionCalc (humanAgeInput) {
//     let result1 = humanAgeInput * 7;
//     return parseInt(result1);
// }

// let fres1 = dogAgeConversionCalc (humanAgeInput);
// alert(`The dog's age is ${fres1}`);

// let dogAgeInput = parseInt(prompt("Enter dog years"));

// function humanAgeConversionCalc (dogAgeInput) {
//     let result2 = dogAgeInput / 7;
//     return parseInt(result2);
// }

// let fres2 = humanAgeConversionCalc(dogAgeInput);
// alert(`Your age is ${fres2}`);



let ageInput = parseInt(prompt("Enter the age"));

function dogAgeCalc (ageInput) {
    let dogAge = ageInput * 7;
    return dogAge;
}

let fres = dogAgeCalc(ageInput);

alert(`Your dog is ${fres} years old and you are ${ageInput} years old.`)
