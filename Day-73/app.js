// Project: Simple Number Guessing Game

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Prompt the user to guess a number
let guess = parseInt(prompt("Guess a number between 1 and 100:"));

// Counter to keep track of the number of attempts
let attempts = 1;

// Loop until the user guesses the correct number
while (guess !== randomNumber) {
    // Check if the guess is too low
    if (guess < randomNumber) {
        alert("Too low! Try again.");
    }
    // Check if the guess is too high
    else {
        alert("Too high! Try again.");
    }
    
    // Prompt the user for another guess
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    
    // Increment the attempts counter
    attempts++;

    // If the user attempts more than 10 times, break out of the loop
    if (attempts > 10) {
        alert("You've reached the maximum number of attempts. The correct number was " + randomNumber + ".");
        break;
    }
}

// If the user guessed the correct number within 10 attempts
if (guess === randomNumber) {
    alert("Congratulations! You guessed the number " + randomNumber + " correctly in " + attempts + " attempts.");
}
