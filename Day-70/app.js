let marks = [99, 85, 93, 76, 62];
let names = ["rahul", "geeta", "neha", "suggu", "aditya"];
let info = ["aman", 25, 6.1];

console.log(marks[2]);
console.log(names);
console.log(info);
console.log(names[1].length);

let empArray = [];
console.log(empArray);


let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
fruits[2] = "pineapple";
fruits[5] = "Richard";
console.log(fruits);

// Push Array Method
let userName = ["Rahul", "Geeta", "Suggu", "Buggu"];
userName.push("Sugiyaaa");
console.log(userName);

// Unshift Array Method

userName.unshift("Richard");
console.log(userName);

// Pop Array Method

userName.pop();
userName.pop(userName[4]);
userName.pop("Sugiyaaa");
console.log(userName);

// Shift Array Method

userName.shift()
userName.shift(userName[0]);
userName.shift("Richard");
console.log(userName);

// Q1 

let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");

console.log(months);


