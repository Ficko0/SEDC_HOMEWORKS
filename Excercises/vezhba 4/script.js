const arrayOfGrades = [10, 6, 8, 9, 6];
const arrayOfGrades2 = [10, 10, 10, 10, 10, 10, 10];

function passOrFail(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    if (sum / array.length > 8) {
        alert('You pass')
    }
    else {
        alert('You fail')
    }
}

passOrFail(arrayOfGrades);
passOrFail(arrayOfGrades2);