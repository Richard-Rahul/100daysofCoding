// Q1 - Get a user to input a number  using prompt ("Enter a number: "). check if the  number is  a multiple of 5 or not?

let num = prompt("Enter a number:");

if (num % 5 === 0) {
    console.log(num, "num is multiple of 5");
} else {
    console.log(num, "num is not multiple of 5");
}


// Q2 - Write a code which can give grades to students according to their scores:
// - 90-100 (A)
// - 70-89 (B)
// - 60-69 (C)
// - 50-59 (D)
// - 0-49 (F)

let score = prompt("Enter your scores");

if (score >= 90 && score <= 100) {
    console.log("A Grade");
} else if (score < 90 && score >= 70) {
    console.log("B Grade");
} else if (score < 70 && score >= 60) {
    console.log("C Grade");
} else if (score < 60 && score >= 50){
    console.log("D Grade");
} else {
    console.log("Fail")
}

// Q3 - Write a program that calculates the ticket price based on age.

// let age = prompt("Enter your age");
let age = 60;
let ticketPrice;

if (age >= 60) {
    ticketPrice = 15; // Senior Citizen discount
} else if (age < 60 && age >= 50) {
    ticketPrice = 50;
} else if (age < 50 && age >= 35) {
    ticketPrice = 35;
} else if (age < 35 && age >= 15) {
    ticketPrice = 20;
} else {
    ticketPrice = Free;
}

console.log("Ticket Price: $" + ticketPrice);

// Q4 - Write a program that determines if a year is a leap year.

// let year = prompt("Enter Year");
let year = 2024;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// Q5 - Write a program that calculates a discount based on the purchase amount.

// let purchaseAmmount = prompt ("Enter your purchase ammount");

let purchaseAmmount = 80;
let discount;

if (purchaseAmmount >= 100) {
    discount = 20;
} else if (purchaseAmmount < 100 && purchaseAmmount >= 60) {
    discount = 10;
} else {
    discount = 0;
}

console.log("Discount: " + discount + "%");

// Q6 - Write a simple number guessing game.

let secretNumber = 7;
let guess = 7;

if (guess === secretNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else if (guess < secretNumber) {
    console.log("Try again")
} else {
    console.log("try another number")
}

// Q7 - Write a program that calculates the Body Mass Index (BMI) and categorizes it.

let weight = 70; // in kilograms
let height = 1.75; // in meters
let bmi = weight / (height * height);
let category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 24.9) {
  category = "Normal weight";
} else if (bmi < 29.9) {
  category = "Overweight";
} else {
  category = "Obese";
}
console.log("BMI: " + bmi.toFixed(2)); // .toFixed(2) limits the number of decimals to 2
console.log("Category: " + category);