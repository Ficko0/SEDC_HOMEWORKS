function buttonFunction() {
    let input1 = parseInt(prompt('Enter the first number.'));
    let input2 = parseInt(prompt('Enter the second number.'));
    let result = input1 + input2;
    
    if (isNaN(input1) || isNaN(input2)) {
        alert('Not a number');
        buttonFunction();
    }
    else {
        alert (`The result is ${result}.`);
    }
}

export default buttonFunction;