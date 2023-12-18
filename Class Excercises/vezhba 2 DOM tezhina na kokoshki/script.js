let inputWeight = prompt("Please enter your weight in kilograms");
let divFromHtml = document.getElementById('biloshto');

function weightInChickens (inputWeight) {
    
    let chickenWeight = 0.5;
    let weightInChicken = (inputWeight * chickenWeight);

    if (isNaN(inputWeight) || inputWeight <= 0) {
        divFromHtml.innerHTML = `<h2>Invalid Input. Please try again.</h2>`
    }
    else if (weightInChicken < 0) {
        divFromHtml.innerHTML = `<h2>The value can't be below zero. Please try again.</h2>`
    }
    else {
        divFromHtml.innerHTML = `<h2>Congratulations. Your weight in chickens is ${weightInChicken} chickens.</h2>`
    }
}

weightInChickens(inputWeight);