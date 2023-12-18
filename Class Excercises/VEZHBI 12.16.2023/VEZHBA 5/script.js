let pinCorrect = 5051;
// let pinPrompt = parseInt(prompt('Enter the pin correctly'));

function pinGuesser() {

    for (i = 0; i < 3; i++) {

        let pinPrompt = parseInt(prompt('Enter the pin correctly'));

        if (pinPrompt == pinCorrect) {
            alert('The pin you entered was correct.');
            break;
        }

        if (pinPrompt !== pinCorrect) {
            alert('Incorrect pin. Try again.');
        }
    }
}

pinGuesser();