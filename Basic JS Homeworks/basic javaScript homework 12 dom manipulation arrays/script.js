let numbersArray = [1,2,3,4,5];

let divToChange = document.getElementById('div1');
let secondDivToChange = document.getElementById('div2');
let thirdDivToChange = document.getElementById('div3');
let fourthDivToChange = document.getElementById('div4')

function sumOfArrayOfNumbers (array) {
    let sum = 0;

    for (i = 0; i < array.length; i++) {
        sum = (array[i] + sum);
    }
    return sum;
}

sumOfArrayOfNumbers(numbersArray);

div1.innerHTML = `<p><b>The numbers from the array are: ${numbersArray}</b></p>`;
div2.innerHTML = `<p><b>The sum of the numbers from the given array is: ${sumOfArrayOfNumbers(numbersArray)}</b></p>`;
div3.innerHTML = `<p><b>The mathematical equation is: ${numbersArray[0]} + ${numbersArray[1]} + ${numbersArray[2]} + ${numbersArray[3]} + ${numbersArray[4]} = ${sumOfArrayOfNumbers(numbersArray)}</b></p>`;
div4.innerHTML = `<p><b>Izvini ako ti padnaa ocite :)</b</p>`