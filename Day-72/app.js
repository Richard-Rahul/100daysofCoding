let colors = ["red", "pink", "black", "white", "blue", "yellow"];

// let final = colors.slice(-3);
// let final = colors.slice(2);
// let final = colors.slice(2, 5);
let final = colors.slice(5);

console.log(final);

// let finalColors = colors.splice(1);
// let finalColors = colors.splice(0, 1);
// let finalColors = colors.splice(-2);
let finalColors = colors.splice(0, 0, "teal", "orange");

console.log(finalColors);


let days = ["Wednesday", "Sunday", "Monday", "Tuesday"];
days.sort();
console.log(days);

let nums = [100, 86, 90, 10, 103];
nums.sort();
console.log(nums);


let months = ["january", "july", "march", "august"];
let finalMonths = months.splice(0, 2, "july", "june");
console.log(finalMonths);
console.log(months);
