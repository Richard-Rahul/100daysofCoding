let sum = 9999999;

if (sum % 10 == 0){
    console.log("a");
} else if (sum % 2 == 1){
    if (sum % 5 == 0 && sum % 2 == 0){
        console.log("b");
    } else if (sum % 5 == 0){
        console.log("c")
    } else {
        console.log("d")
    }
} else {
    console.log("e")
}


let i = 100;

if (i === 10) {
    console.log("i is equal to 10");
    if (i < 15) {
        console.log("i is smaller then 15.");
    } else if (i < 12) {
        console.log("i is smaller then 12 too.");
    } else {
        console.log("i is greater then 15")
    }
} else {
    console.log("i is greater then 10")
}

let num = -15;

if (num > 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}


let a = 15;

if (a % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// find the largest of two number

/*
let num1 = 15;
let num2 = 20;

if (num1 > num2) {
    console.log("num1 is greater then num2");
} else if (num2 > num1){
    console.log("num2 is greater then num1");
} else {
    console.log("num1 is equal to num2");
}

*/


/* finds the largest of three number by using “>” and “&&” operator in JavaScript.

    Print num1 is the largest if num1>num2 and num1>num3.
    Print num2 is the largest if num2<num3.
    Else print num3. 
*/

let num1 = 150;
let num2 = 30;
let num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log("Num1 is the largest number");
} else if (num2 > num3) {
    console.log("num2 is the largest number");
} else {
    console.log("num3 is the largest number");
}


// Write a program that assigns a letter grade based on a numerical grade.

let marks = 99;

if (marks >= 90 & marks < 100) {
    console.log("A+");
} else if (marks < 90 & marks >=70) {
    console.log("A");
} else if (marks < 70 & marks >=50) {
    console.log("B");
} else if (marks < 50 & marks >= 33) {
    console.log("C");
} else {
    console.log("F")
}