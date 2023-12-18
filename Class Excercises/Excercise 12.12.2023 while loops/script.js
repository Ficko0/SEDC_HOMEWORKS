function sumPow (num1, num2) {

    let result = 0;
    let i = num1;

    while (i <= num2) {
        result += Math.pow(1, 2);
        i++;
    }
    return result;
}

console.log(sumPow(1, 5));
console.log(sumPow(101, 150));