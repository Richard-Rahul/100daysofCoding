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