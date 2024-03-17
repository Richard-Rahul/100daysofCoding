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

let num1 = 15;
let num2 = 20;

if (num1 > num2) {
    console.log("num1 is greater then num2");
} else if (num2 > num1){
    console.log("num2 is greater then num1");
} else {
    console.log("num1 is equal to num2");
}