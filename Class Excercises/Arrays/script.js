let monthsToYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
let monthsInYearButAnotherVariable = monthsToYear;


monthsInYearButAnotherVariable.push ('December');

console.log(monthsToYear);  // so .length se dava direktna informacija kolku e dolga nizata

let lastMonthOfTheArray = monthsToYear.pop(); // so .pop() komandata se trga posledniot element od nekakva niza

console.log(lastMonthOfTheArray);

let firstMonthInTheArray = monthsToYear.shift();  // so .shift komandata se trga prviot element od nekakva niza

console.log(firstMonthInTheArray);