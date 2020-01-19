console.log("Starting my demo app");

const fs = require("fs");
const os = require("os");

const userInfo = os.userInfo();

fs.appendFile(
  "greetings.txt",
  `Hello ${userInfo.username} !!!\n`,
  "utf8",
  err => {
    if (err) throw err;
    console.log("data appended to file successfully");
  }
);
