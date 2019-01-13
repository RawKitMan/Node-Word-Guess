let Letter = require("./Letter.js");

let Word = function(word){
    this.lettersArr = [];
    
    for(let i=0; i < word.length; i++){
        if(word.charAt(i) === " "){
            this.lettersArr.push(" ");
        }
        else{
            this.lettersArr.push(new Letter(word.charAt(i)));
        };
    };

    this.createString = function(){
        let wordString = "";

        //Needs to use the display letter function. Add this in tomorrow.
        this.lettersArr.forEach(function(element){
           if(element === " "){
               wordString += "  ";
           }
           else{
               wordString += element.displayLetter();
           }
        });
        return wordString;
    }

    this.checkGuessWord = function(letterGuess){
        this.lettersArr.forEach(function(element){
            
            if(element.letter !== " "){
                element.checkGuess(letterGuess);
            }
        });
    };
};

module.exports = Word;