const p1ToChange = document.getElementById('paragraphToChange');
const buttonEffect = document.getElementById('changeRandom');

buttonEffect.addEventListener('click', function() {
    
    p1ToChange.style.color = 'red'
    p1ToChange.style.backgroundColor = 'blue'
    p1ToChange.style.fontSize = '20px'
})