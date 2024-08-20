const prompt = require("prompt-sync")();

const totalQuestCount = 4;
let correctAnswers = 0;

console.log("Welcome to the quiz!");

const answer1 = prompt("What's my first name? ");
const correctAnswer1 = "NIKHILA";

if (answer1.toUpperCase() === correctAnswer1) {
    console.log("Yayy, You got it correct!");
    correctAnswers += 1;
}
else {
    console.log("Better luck next time :)");
}

const answer2 = prompt("What's my hometown? ");
const correctAnswer2 = "SURYAPET";

if (answer2.toUpperCase() === correctAnswer2) {
    console.log("Yayy, You got it correct!");
    correctAnswers += 1;
}
else {
    console.log("Better luck next time :)");
}

const answer3 = prompt("What's my highest level of education? ");
const correctAnswer3 = "MASTERS";

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("Yayy, You got it correct!");
    correctAnswers += 1;
}
else {
    console.log("Better luck next time :)");
}

const answer4 = prompt("What's my occupation? ");
const correctAnswer4 = "SOFTWARE ENGINEER";

if (answer4.toUpperCase() === correctAnswer4) {
    console.log("Yayy, You got it correct!");
    correctAnswers += 1;
}
else {
    console.log("Better luck next time :)");
}

const percentage = Math.round((correctAnswers / totalQuestCount) * 100);
console.log("You got", correctAnswers, "out of", totalQuestCount, "correct!");
console.log("And you scored", percentage.toString()+"%");


