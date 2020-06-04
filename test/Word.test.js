const Word = require("../util/Word");

describe("Word", () => {
    describe("Success", () => {
        it("Should create a new word object with the word set to argument", () => {
            const testWord = new Word("test");
            expect(testWord).toEqual({ word: "test" });
        });
        describe("getWord", () => {
            it("Should return word", () => {
                const testWord = new Word("test");
                expect(testWord.getWord).toBe("test");
            });
        });
        describe("capitalize", () => {
            it("Should return capitalized word", () => {
                const testWord = new Word("test");
                expect(testWord.capitalize).toEqual({ word: "TEST" });
            });
        });
        describe("lowercase", () => {
            it("Should return capitalized word", () => {
                const testWord = new Word("TEST");
                expect(testWord.lowercase).toEqual({ word: "test" });
            });
        });
        describe("palindrome", () => {
            it("Should return true if word is a palindrome", () => {
                const testWord = new Word("dad");
                const test = new Word("day");
                expect(testWord.isPalindrome).toBe(true);
                expect(test.isPalindrome).toBe(false);
            });
        });
        describe("setWord", () => {
            it("Should set a word", () => {
                const test = new Word("test");
                test.setWord = "t";
                expect(test).toEqual({ word: "t" });

            });
        });
        //we are using toEqual because the function reverse returns the object constructor which then will return the object itself
        describe("reverse", () => {
            it("Should return the reverse of the word", () => {
                const rev = new Word("reverse");
                expect(rev.reverse).toEqual({ word: "esrever" });
            });
        });
    });
});