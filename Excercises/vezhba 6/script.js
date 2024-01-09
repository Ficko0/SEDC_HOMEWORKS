const storyDiv = document.getElementById('storyDiv');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const button = document.getElementById('create');

function storyTell() {
    storyDiv.innerHTML += `<p>${input1.value} is ${input2.value}. He/She existed in ${input3.value}.`
}

button.addEventListener('click', storyTell)