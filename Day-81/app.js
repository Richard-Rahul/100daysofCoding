// Example array
const numbers = [5, 10, 15, 20, 25];


// Using map to double each element
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);


// Using filter to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);


// Using every to check if all numbers are positive
const allPositive = numbers.every(num => num > 0);
console.log("Are all numbers positive?", allPositive);


// Using reduce to calculate sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);


// Finding maximum value in array
const max = Math.max(...numbers);
console.log("Maximum number:", max);


// Function with default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); 
greet("John"); 

// Using spread operator and rest parameter
function addNumbers(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
const numbersToAdd = [2, 4, 6, 8];
const total = addNumbers(...numbersToAdd);
console.log("Total:", total);

// Using destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
const { firstName, lastName, age } = person;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
