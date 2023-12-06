console.log("hello");

// CONTROL STRUCTURES AND NESTED IF / ELSE

let score = parseInt(prompt("Vnesete poeni od ispitot"));
let pass = 50;
let splendid = 80;

if (score >= splendid) {
    alert("You have passed the exam with splendid results");
}

else if (score >= pass) {
    alert("You have barely passed the exam")
}

else {
    alert("You failed RETARD!");
}


