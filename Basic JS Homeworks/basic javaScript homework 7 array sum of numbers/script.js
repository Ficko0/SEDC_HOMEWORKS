let numbersArray = [1, 2, 3, 4, 5];

function sumOfArrayOfNumbers (array) {
    let sum = 0;

    for (i = 0; i < array.length; i++) {
        sum = (array[i] + sum)
    }
    return sum;
}

console.log(sumOfArrayOfNumbers(numbersArray));