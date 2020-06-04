const Word = require("./util/Word");

const text = new Word("dad");
const ntext = text.getWord;
console.log(ntext);
console.log(text.capitalize);
console.log(text.lowercase);
console.log(text.isPalindrome);
console.log(text.reverse);