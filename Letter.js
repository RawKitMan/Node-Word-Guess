//Does not depend on any other files

//Letter constructor that stores the letter for a word being guessed (in other files), has a value to determine if the letter
//was guessed or not, and then displays either an underscore (if guessed === false) or the letter (if guessed === true);
let Letter = function(letter){
    this.letter = letter;
    this.guessed = false;
    
    //method checks the 'guessed' property and returns either an _ or letter based on the 'guessed' value
    this.displayLetter = function(){
        if(this.guessed){
            return this.letter + " ";
        }
        else{
            return "_ ";
        };
    };

    //if the guessed letter matches the 'letter' value, then we change the 'guessed' value of the Letter object to 'true'.
    this.checkGuess = function(guess){
        if(guess === this.letter){
            this.guessed = true;
        }
        
    };
};

//Exporting the constructor to the Word.js file.
module.exports = Letter;
