let celsiusInput = parseInt(prompt("Vnesi celziusi"))

function celsiusToFahrenheit (celsius) {
    let conversionCalc = (celsius * 1.8) + 32;
    let result = conversionCalc;
    return parseInt(result);
}
let fres2 = celsiusToFahrenheit(celsiusInput);
alert(`your result is : ${fres2}`);


let fahrenheitInput = parseInt(prompt("Vnesi farenhajt"))

function fahrenheitToCelsius(fahrenheit) {
    let conversionCalc = (5/9) * (fahrenheit - 32);
    let result = conversionCalc;
    return parseInt(result);
}

let fres = fahrenheitToCelsius(fahrenheitInput)
alert(`your result is : ${fres}`)


