//using javascript booster to conver the word function into a class with a constructor function 
class Word {
    constructor(wrd) {
        this.word = wrd;
    }
    //get cannot take in an argument
    //you can return things
    get getWord() {
        return this.word;
    }
    //set needs to take in an argument 
    //can not return anything
    set setWord(wrd) {
        this.word = wrd;
    }
    get reverse() {
        return new Word(this.word.split("").reverse().join(""));
    }
    get capitalize() {
        return new Word(this.word.toUpperCase());
    }
    get lowercase() {
        return new Word(this.word.toLowerCase());
    }
};

module.exports = Word;

// message.error("Hello");
// message.success("Good Job");