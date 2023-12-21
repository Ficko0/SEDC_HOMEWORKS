const headLine = document.getElementsByTagName('h1')[0];
headLine.innerText = 'That was last class';

const mainContainer = document.getElementById('main-container');
mainContainer.innerHTML = `
<ul>
    <li>Element1</li>
    <li>Element2</li>
    <li>Element3</li>
</ul>
`

const redTexts = document.getElementsByClassName('redText');

for (let element of redTexts) {
    if (Math.random() > 0.5) {

        element.style.color = 'red';
    }
    else {
        element.style.color = 'green';
    }
}