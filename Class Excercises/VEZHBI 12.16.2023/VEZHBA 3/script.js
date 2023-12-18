let arrayOfNumbers1 = [1, 2, 3, 4, 5, 10, 100, 20];
let arrayOfNumbers2 = [39, 213, 123, 5, 33, 3332];
let arrayOfNumbers3 = [766, 13, 1345, 9747, 233];

function arrayChecker (array) {

    let smallestNumber = -Infinity;
    let biggestNumber = Infinity;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        if (smallestNumber < array[i]) {
            smallestNumber = array[i];
        }

        if (biggestNumber > array[i]) {
            biggestNumber = array[i];
        }
        sum = (array[i] + sum) / array.length;
    }
    return [smallestNumber, biggestNumber, array.length, sum.toFixed(2)];
}

console.log(arrayChecker(arrayOfNumbers1));
console.log(arrayChecker(arrayOfNumbers2));
console.log(arrayChecker(arrayOfNumbers3));