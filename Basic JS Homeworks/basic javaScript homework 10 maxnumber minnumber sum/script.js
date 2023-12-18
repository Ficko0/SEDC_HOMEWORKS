let arrayOfNumbers1 = [1, 2, 4, 5, 56, 6, 8, 9, 12083];
let arrayOfNumbers2 = [892387, 1238932, 12333, 4, 5, 5, 5];
let arrayOfNumbers3 = [1, 2, 3, 4, 5]

function maxMinSum (array) {

    let biggestNumber = Infinity;
    let smallestNumber = -Infinity;
    let sum = 0;

    for (i = 0; i < array.length; i++) {

        if (biggestNumber > array[i]) {
            biggestNumber = array[i];
        }
        if (smallestNumber < array[i]) {
            smallestNumber = array[i];
        }
        sum = (biggestNumber + smallestNumber);
    }
    return [smallestNumber, biggestNumber, sum];
}

console.log(maxMinSum(arrayOfNumbers1));
console.log(maxMinSum(arrayOfNumbers2));
console.log(maxMinSum(arrayOfNumbers3));
