console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes");

// console.log(_.isString("abc"));
// console.log(_.isString(123546));
var filteredArray = ['hello',12,21,12,'hello'];
console.log(_.uniq(filteredArray))

// const res = notes.addNotes(2, 2);
// console.log(res);

// const userInfo = os.userInfo();

// fs.appendFile(
//   "greetings.txt",
//   `Hello ${userInfo.username} ! You are ${notes.age}.\n`,
//   "utf8",
//   err => {
//     if (err) throw err;
//     console.log("data appended to file successfully");
//   }
// );
