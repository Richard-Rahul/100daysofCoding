/* Guessing Game

- User enters a max number & then tries to guess a random generated number between 1 to max.

*/

const maxStr = prompt("Please enter the maximum number for the guessing game:");
const max = parseInt(maxStr);

// Validate user input
if (isNaN(max) || max <= 0) {
    console.log("Invalid input. Please enter a valid positive number.");
} else {
    const targetNumber = Math.floor(Math.random() * max) + 1;
    let attempts = 0;
    let guess;

    while (guess !== targetNumber) {
        guess = parseInt(prompt("Guess the number between 1 and " + max + ":"));

        // Check if guess is valid
        if (isNaN(guess) || guess < 1 || guess > max) {
            console.log("Invalid guess. Please enter a number between 1 and " + max + ".");
        } else {
            attempts++;

            if (guess < targetNumber) {
                console.log("Too low. Try again.");
            } else if (guess > targetNumber) {
                console.log("Too high. Try again.");
            } else {
                console.log("Congratulations! You guessed the number " + targetNumber + " correctly in " + attempts + " attempts!");
            }
        }
    }
}
