const Word = require("./util/Word");

const text = new Word("Thing");
const ntext = text.getWord;
console.log(ntext);
console.log(text.capitalize);
console.log(text.lowercase);
console.log(text.reverse);