let arrayOfDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// for (let i = 0; i < arrayOfDays.length; i++) {

//     let dayOfWeek = arrayOfDays[i];
//     alert(`Iteratorot momentalno e: i == ${i}, a dayOfWeek e ${dayOfWeek}`)
// }

for (let dayOfWeek of arrayOfDays) {
    console.log(dayOfWeek);  // FOR-OF LOOP
}