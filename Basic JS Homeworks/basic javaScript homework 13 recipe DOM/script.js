let recipeNameInput = prompt("What will be the recipe's name?");
let numberOfIngridientsInput = prompt("How many ingridients will we need?");
let ingridientNameInput = prompt("What are the needed ingridients?");

let firstDiv = document.getElementById('recipeName');
let secondDiv = document.getElementById('recipeNumberOfIngridients');
let thirdDiv = document.getElementById('listOfAllIngridients');

// function recipeNameIsNaN(recipeNameInput) {

//     if (isNaN(recipeNameInput)) {
//         alert('The provided input is invalid. Please try again.')
//     }
//     else {
//         return recipeNameInput;
//     }
// }

// function numberOfIngridientsIsNaN (numberOfIngridientsInput) {

//     if (isNaN(numberOfIngridientsInput)) {
//         alert('The provided input is invalid. Please try again.')
//     }
//     else {
//         return numberOfIngridientsInput;
//     }
// }

// function ingridientNameIsNaN (ingridientNameInput) {
//     if (isNaN(ingridientNameInput)) {
//         alert('The provided input is invalid. Please try again.');
//     }
//     else {
//         return ingridientNameInput;
//     }
// }

firstDiv.innerHTML = `<h1>The name of the recipe is: ${recipeNameInput}</h1>`;
secondDiv.innerHTML = `<h2>The number of items needed to make your ${recipeNameInput} are: ${numberOfIngridientsInput}</h2>`;
thirdDiv.innerHTML = `<h3>The needed items for making your ${recipeNameInput} are:</h3>
<ul>
<li></li>
</ul>`