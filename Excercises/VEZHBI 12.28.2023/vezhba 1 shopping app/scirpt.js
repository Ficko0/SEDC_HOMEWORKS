let boughtItems = []
const ulItem = document.getElementById('ul')

function shopping () {
    const clothing = prompt ('What piece of clothing would you like to buy? Please select between shirt, pants, sneakers and sandals!');
    let list = `<ul>`;

    if ((clothing == 'shirt') || (clothing == 'pants') || (clothing == 'sneakers') || (clothing == 'sandals')) {
        const colorPrompt = prompt('Pick a color of the chosen item! Choose between white, black, yellow, green.');

        if ((colorPrompt == 'white') || (colorPrompt == 'black') || (colorPrompt == 'yellow') || (colorPrompt == 'green')) {
            const yesOrNo = prompt('Would you like to continue shopping? Type yes or no.')
            boughtItems.push(`<li>${clothing} ${colorPrompt}</li>`)

            if (yesOrNo == 'yes') {
                shopping();
            }

            else {
                alert('Thank you for shopping!');
                boughtItems = []
            }
        }

        else {
            alert('Please choose from the given colors!');
            colorPrompt;
        }
    }

    else {
        alert('Please choose an item that is already in stock!');
        shopping();
    }

    list += `</ul>`
    for (const items of boughtItems) {
        
        ulItem.innerHTML += items;
    }
}

shopping();

/////////////////////////////////////////

// function shopping() {
//     let chosenTypeOfClothing;
//     let chosenColor;

//     while (!chosenTypeOfClothing) {
//         let clothing = prompt('what type of clothing would you like?');
//     }

//     switch (clothing) {
//         case 'pants':
//         case 'shirt':
//         case 'sneakers':
//         case 'sandals':
//             chosenTypeOfClothing = clothing;
//             break;
//         default:
//             alert(`We don't have the ${clothing}. Please try again!`)
//     }

//     while (!chosenColor) {
//         let color = prompt(`Please choose a color.`);
//     }

//     switch (color) {
//         case 'green':
//         case 'white':
//         case 'black':
//         case 'yellow':
//             chosenColor = color;
//             break;
//         default:
//             alert('We dont have such color. Choose another color.')
//     }


// }