let a = 'A';
let b = 'a';

console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);
console.log(a==b);
console.log(a===b);


// if statement
// let age = 15;

// if (age>=18) {
//     console.log("You can vote.")
// }

// Q- Create a traffic light system that shows what to do based on color.

let color = "red";
if (color === "red") {
    console.log("Stop");
}

if (color === "yellow") {
    console.log("Slow-Down");
}

if (color === "green") {
    console.log("Go");
}

// else statement

let age = 12;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannnot vote.")
}


let marks = 25;

if (marks >= 80) {
    console.log("A");
} else if (marks >=60) {
    console.log("B")
} else if (marks >= 33) {
    console.log("C");
} else if (marks < 33) {
    console.log("F");
}


let month = "april";

if (month === "january") {
    console.log("Winter is here");
} else if (month === "april") {
    console.log("Summer is here");
}

let rang = "green";

if (rang === "red") {
    console.log("STOP");
} else if (rang === "yellow") {
    console.log("SLOW-DOWN");
} else if (rang === "green") {
    console.log("GO");
}


let my_color;

if (my_color === "red") {
    console.log("STOP");
} else if (my_color === "yellow") {
    console.log("SLOW-DOWN");
} else if (my_color === "green") {
    console.log("GO");
} else {
    console.log("Traffic light broken");
}

/* Q - create a system to calculate popcorn prices based on the size customer asked for:
   if size is "XL", price is Rs. 250
   if size is "L", price is Rs. 200
   if size is "M", price is Rs. 100
   if size is "S", price is Rs. 50  */

let size = "S";

if (size === "XL") {
    console.log("Price is Rs. 250");
} else if (size === "L") {
    console.log("Price is Rs. 200");
} else if (size === "M") {
    console.log("Price is Rs. 100");
} else {
    console.log("Price is Rs. 50");
}
