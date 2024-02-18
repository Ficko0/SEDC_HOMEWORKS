// import {
//     getUserByMail,
//     getUserByRole,
//     getUserNames
// } from "./userService.js";

import * as userService from "./userService.js"

const userNames = userService.getUserNames();
console.log(userNames);

// const userNames = getUserNames();
// console.log(userNames);

// const userAdmin = getUserByRole ('admin');
// console.log(userAdmin);