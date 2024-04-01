
const randomNumber = Math.floor(Math.random() * 100) + 1;


let guess = parseInt(prompt("Guess a number between 1 and 100:"));


let attempts = 1;


while (guess !== randomNumber) {
  
    if (guess < randomNumber) {
        alert("Too low! Try again.");
    }
   
    else {
        alert("Too high! Try again.");
    }
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;


    if (attempts > 10) {
        alert("You've reached the maximum number of attempts. The correct number was " + randomNumber + ".");
        break;
    }
}


if (guess === randomNumber) {
    alert("Congratulations! You guessed the number " + randomNumber + " correctly in " + attempts + " attempts.");
}
