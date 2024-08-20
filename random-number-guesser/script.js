const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
    guesses++;
    const guess = Number(prompt("Guess the random number between (0 - 100): "));

    if (guess > target) {
        console.log("Your guess is too high");
    }
    else if (guess < target) {
        console.log("Your guess is too low");
    }
    else if (guess === target) {
        console.log("You got it correct!");
        break;
    }
    else {
        console.log("Your input is not a number.")
    }
    
}

console.log("You guessed the number in", guesses, "tries");