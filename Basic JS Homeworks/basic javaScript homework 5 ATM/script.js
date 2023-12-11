let cashWithdrawInput = prompt("Please enter the sum you would like to take out.");

function atmWithdraw(cashWithdrawInput) {

    let accountMoney = 20000;
    let atmWithdrawCalc = accountMoney - cashWithdrawInput;

    if (isNaN(cashWithdrawInput) || (cashWithdrawInput <= 0)) {
        return alert("Insufficient ammount. Try Again!");
    }
    else if (cashWithdrawInput > atmWithdrawCalc) {
        return alert("You can't withdraw the desired ammount. Try again!")
    }
    else {
        return alert(`You have succesfully withdrawn ${cashWithdrawInput}$ and you have ${atmWithdrawCalc}$ left.`)
    }
}

atmWithdraw(cashWithdrawInput);