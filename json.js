// var person = '{"name" : "Durgesh", "age" : 24}';

// var personJson = JSON.parse(person);
// console.log(personJson);
// console.log(typeof personJson);

const fs = require("fs");

var originalNote = {
  title: "Some title",
  body: "This is the body of the note"
};
var originalNoteStringify = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteStringify);

var noteSrting = fs.readFileSync("notes.json");
var noteParse = JSON.parse(noteSrting);
console.log(noteParse);
