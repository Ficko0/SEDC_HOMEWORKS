function salary() {
    const totalSalary = 1000;
    const amountAtTheEnd = totalSalary - 625;
    const costOfLiving = totalSalary - amountAtTheEnd;

    return alert(`Bob has a salary of ${totalSalary}€. The amount of money left for the rest of the month is ${amountAtTheEnd}€. 
                  The cost of his living expenses is ${costOfLiving}€.`)
}

salary();