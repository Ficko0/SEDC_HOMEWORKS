const recipeNameDiv = document.getElementById('recipeName');
const numberOfIngridients = document.getElementById('numberOfIngridients');
const listOfIngridients = document.getElementById('listOfIngridients');
listOfIngridients.innerHTML = `<h4>The list of the needed ingridients are: </h4>`

let inputPrompt1 = prompt('What is the name of the recipe?');
let inputPrompt2 = parseInt(prompt('How many ingridients?'));

for (let i = 1; i <= inputPrompt2; i++) {

    let inputPrompt3 = prompt(`What is the #${[i]} ingridient?`);
    let list = `<ul>`;
    list += `<li>` + inputPrompt3 + `</li>`;
    list += `</ul>`;
    listOfIngridients.innerHTML += list;
}

recipeNameDiv.innerHTML = `<h1>The recipe name is: ${inputPrompt1}</h1>`
numberOfIngridients.innerHTML = `<h3>The number of ingridients are: ${inputPrompt2}</h3>`