let Word = require("./Word.js");

let testWord = new Word("CRAP STICK");

console.log(testWord.lettersArr);

testWord.checkGuessWord("C");

console.log(testWord.lettersArr);