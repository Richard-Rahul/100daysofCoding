/* Q1 - Write a JS program to delete all occurrences of element ‘num’ in a given array.

Example:if arr = [1,2,3,4,5,6,2,3] & num = 2 

Result should be arr = [1,3,4,5,6,3]  */

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}

console.log(arr);

/* Write a JS program to find the no of digits in a number.

Example:if number = 287152, count = 6 */

// let number = 287152;
let count = 0;

// let copy = number;

// while(copy>0) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);

/* Write a JS program to find the sum of digits in a number.

Example:if number = 287152, sum = 25  */

// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy > 0) {
//     digit = copy % 10;
//     sum+= digit;
//     copy = Math.floor(copy/10);
// }

// console.log(sum);

// -------------

let n = 5;

let factorial = 1;

for (let i =1; i<=n; i++) {
    factorial *= i;

}

console.log(`factorial of ${n} is ${factorial}`);


// ---------------

let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for (let i = 0; i<=arr1.length; i++) {
    if (largest < arr1[1]) {
        largest = arr[1];
    }
}

console.log(largest);

// -------------------------- Object Literals----------------------------

let person = {
    name: "Rahul Verma",
    age: 24, 
    email: "rahul@gmail.com",
};

console.log(typeof(person));

let student = {
    name: "Geeta Verma",
    age: 23,
    email: "geeta@gmail.com"
};

console.log(typeof(student));

