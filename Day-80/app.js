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
    marks: 95,
    email: "geeta@gmail.com"
};

console.log(typeof(student));
console.log(student);

const x = [1, 2, 3];
x[-1] = -1;
console.log(x.length);


function greet(name) {
    if(name === undefined) {
        name = "friend";
    }
    console.log("Hello" + " " + name);
}

greet();

//---------------

const items = {
    price: 70,
    discount: 15,
    color: ["Red", "Pink"],
}

console.log(items);

// -----Create a X post

const post = {
    username: "@richar_rahul",
    content: "I Love You Suggiyaa #Love",
    like: 450,
    repost: 15,
    tag: ["@suggu_verma", "@love"],

};

console.log(post); // print whole object value
console.log(post["content"]); // print only key value, only content ki value print hogi.
console.log(post["username"]);
console.log(post["like"]);
console.log(post["tag"]);

console.log(post.content); 

// --------------- Add / Update values -----------------------

const std = {
    name: "Rahul Verma",
    age: 24,
    marks: 750,
    city: "Gurgaon",
};

console.log(std);

// after chanding city value

std.city = "New Delhi";
std.marks = [80, 72, 98, 60, 85];

console.log(std);

// adding new value

std.gender = "Male";
std.phone = 7011959640;
std.email = "rahul@gmail.com";

console.log(std);

// delete value

delete std.marks;
console.log(std);

// nesting of object

const classInfo = {
    Rahul : {
        grade: "A+",
        city: "Gurgaon",
        Gender: "Male"
    },

    Geeta : {
        grade: "A",
        city: "Delhi",
        Gender: "Female",
    },

    Richard : {
        grade: "C+",
        city: "Mumbai",
        Gender: "Male",
    }
};

console.log(classInfo);
console.log(typeof(classInfo));


let outPut = 2 ** 3;
console.log(outPut);

let stdInfo = [
    {
        name: "Rahul",
        age: 24,
        marks: 780,
    }, 

    {
        name: "Geeta",
        age: 23,
        marks: 800,
    }, 
    {
        name: "Aditya",
        age: 20,
        marks: 750,
    }
];

console.log(stdInfo);

stdInfo[1].name = "Suggu";
console.log(stdInfo);

