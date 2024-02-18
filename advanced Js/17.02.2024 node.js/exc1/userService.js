import {users} from "./users.js";
console.log(users);

function getUserByMail (userEmail) {
    return users.find (user => user.email === userEmail); //.find() go vrakja prvoto neshto shto ke e postaveno kako uslov
}

function getUserByRole (userRole) {
    return users.filter (user => user.role === userRole); //.filter() vrakja niza, ako ne najde nishto ke vrati prazna niza []
}

function getUserNames () {
    return users.map(user => user.firstName);
}

export {
    getUserByMail,
    getUserByRole,
    getUserNames
}