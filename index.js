let Word = require("./Word.js");
let inquire = require("inquirer");

/*let testWord = new Word("CRAP STICK");

testWord.checkGuessWord("C");

console.log(testWord.createString());*/

const wordArray = ["SEPHIROTH", "KEFKA", "CLOUD", "TIDUS", "SEYMOUR", "CHOCOBO", "MATERIA", "ULTIMATE WEAPON"]

const letters = /[a-zA-Z]/;

let numGuesses;

function playGame() {

    let wordGuessed = false;
    let word = new Word(wordArray[Math.floor(Math.random() * 8)]);
    numGuesses = 10;
    guessWord(word);

    /*inquire.prompt([
        {
            name: "guess",
            message: "Pick a letter.",
            /*validate: function validateLetter(name) {
                if (!name.match(letters)) {
                    return "Please pick a letter only.";
                }
            }
        }
    ]).then(function (answer) {
        word.checkGuessWord(answer.guess);
        console.log(word.createString());
    });*/
};

function guessWord(guess) {

    let guessArr = [];
    console.log(guess.createString());
    inquire.prompt([
        {
            name: "guessLetter",
            message: "Pick a letter.",
            /*validate: function validateLetter(name) {
                if (!name.match(letters)) {
                    return "Please pick a letter only.";
                }
            }*/
        }
    ]).then(function (answer) {
        guess.checkGuessWord(answer.guessLetter.toUpperCase());

        guess.lettersArr.forEach(function (element) {
            guessArr.push(element.guessed);
        });

        if (guessArr.indexOf(false) > -1 && numGuesses > 0) {
            guessWord(guess);
        }
        else {
            if (numGuesses === 0) {
                console.log("");
                console.log("You lose");
            }
            else {
                console.log("You did it!");
            };

            inquire.prompt([
                {
                    type: "confirm",
                    name: "playAgain",
                    message: "Would you like to play again?",
                    default: true
                }
            ]).then(function(answer){
                if(answer.playAgain){
                    playGame();
                }
                else{
                    process.exit();
                }
            });
        };
    });
};

playGame();
