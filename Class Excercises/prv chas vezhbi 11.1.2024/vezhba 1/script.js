let array1 = [];
let array2 = [];
let array3 = [];

function numberDivideBy3() {
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 == 0) {
            array1.push(i);
        }
    }
}

numberDivideBy3();
console.log(array1);

function numberDivideBy4() {
    for (let i = 1; i <= 1000; i++) {
        if (i % 4 == 0) {
            array2.push(i);
        }
    }
}

numberDivideBy4();
console.log(array2);

function numberThatEndsWith1 () {
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 == 1) {
            array3.push(i);
        }
    }
}

numberThatEndsWith1();
console.log(array3);
