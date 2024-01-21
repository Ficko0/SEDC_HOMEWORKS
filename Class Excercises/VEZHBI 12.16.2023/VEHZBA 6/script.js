function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {

        if ((i % 5 == 0) && (i % 3 == 0)) {
            console.log('FizzBuzz');
        }
        else if (i % 3 == 0) {
            console.log('Fizz');
        }

        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }

    }
}

fizzBuzz();

const findArrays = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const average = arr.reduce((a, b) => a + b / arr.length)

    return [min, max, average, arr.length]
}

console.log(findArrays([5, 10, 2, 25]))