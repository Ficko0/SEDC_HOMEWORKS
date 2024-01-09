function closerTo100 () {
    const input1 = parseInt(prompt('Enter the first number.'));
    const input2 = parseInt(prompt('Enter the second number.'));
    
    if (input1 != input2) {
        const input1Math = Math.abs (input1 - 100); // rezultatot go pretvara vo absolutna vrednost (dokolku e negativna brojka)
        const input2Math = Math.abs (input2 - 100);

        if (input1Math < input2Math) {
            alert (`The number ${input1} is closer to 100.`)
        }

        if (input2Math < input1Math){
            alert (`The number ${input2} is closer to 100.`)
        }
    }
    else {
        alert(`The numbers are equal.`);
        closerTo100();
    }
}

closerTo100();