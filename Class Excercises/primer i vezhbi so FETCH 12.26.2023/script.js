//  https://swapi.dev/api/

import test from "./src/test.js"; // mora da se dopishe .js (MNOGU VAZHNO)

test('biloshto');

const button = document.querySelector('#testButton');
const button2 = document.querySelector('#testButton2');

button.addEventListener('click', function testButtonFunction() {
    console.log('Button is linked.');
})

button2.addEventListener('click', function () {
    test('heheeheheheheh vtoro kopce');
})

