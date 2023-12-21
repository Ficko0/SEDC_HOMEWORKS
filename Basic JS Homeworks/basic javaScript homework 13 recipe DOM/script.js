const recipeDiv = document.getElementById('recipe');
const buttonForRecipe = document.getElementById('createRecipe');

function createRecipeOfChoice () {
    let recipeNameInput = prompt('Please ente the name of the recipe');
    let numberOfIngridientsInput = parseInt(prompt('How many ingridients?'));
    let nameOfIngridientsInput = prompt('what are the igridients?');

    for (let i = 0; i < nameOfIngridientsInput; i++) {
        recipeDiv.innerHTML = 
    }
}