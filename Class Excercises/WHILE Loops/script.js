let arrayOfNumbers = [1, 25, 2332, 11, -25, 629, 551];

function findLargestNumberInArray (someArray) {

    let lastBiggestNumber = -Infinity;
    let i = 0;

    while (i < someArray.length) {  // WHILE LOOPS

        if (someArray[i] > lastBiggestNumber) {
            lastBiggestNumber = someArray[i];
        }
        i++;
    }

    return lastBiggestNumber;
}

// let lastBiggestNumber = findLargestNumberInArray(arrayOfNumbers);

// console.log(lastBiggestNumber);

// function digitsInNumber (input) {
//     console.log(`input: ${input}`);
//     while (input > 0) {
//         console.log(input % 10);
//         input = parseInt(input)
//     }
// }
