let div1 = document.getElementsByTagName('div')[0];

console.log(div1);

function paragraphTemplate(iteratorToBeInjected) {
    return `
    <p class="bigLetters">I am a paragraph ${iteratorToBeInjected} from jScript.</p>
    `
}

for (let i=0; i < 50; i++) {
    div1.innerHTML += paragraphTemplate(i)
}

const secondHeadline = document.getElementById('secondHeadline');

console.log(secondHeadline.previousElementSibling);

const cardContainer = document.getElementById('cardContainer');

const childerOfCardContainer  = cardContainer.children;
const firstChildOfCardContainer = cardContainer.firstElementChild;
const lastChildOfCardContainer = cardContainer.lastElementChild;

console.log(childerOfCardContainer);
console.log(firstChildOfCardContainer);
console.log(lastChildOfCardContainer);