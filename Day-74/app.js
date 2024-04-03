// ex 1
let arr = [1, 2, 3, 450, 70];
arr.splice(4);
console.log(arr)

let str1 = "name";
let str2 = "name";

console.log(str1 == str2);
console.log(str1 === str2);

// Ex 2
let arr1 = [1];
let arr2 = [1];
let arr3 = [];
let arr4 = [];


console.log(arr1 == arr2);
console.log(arr1 === arr2);
console.log(arr3 === arr4);
console.log(arr3 == arr4);

// Ex 3
let arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5;

console.log(arr5 == arr6);
console.log(arr5 === arr6);

// Ex 4
let a = 1;
let b = 1;

console.log(a == b);
console.log(a === b);

// Ex 5
let arr7 = ["a", "b"];
let arrCopy = arr7;

arrCopy.push("c");
arr7.push("d")

arrCopy.pop();

console.log(arrCopy);
console.log(arr7);
console.log(arr7 == arrCopy);
console.log(arr7 === arrCopy);

// ex 6

const arr8 = [1, 2, 3];
arr8.push(4);
arr8.pop();

console.log(arr8);

// ex 7

let num = [[1, 2], [3, 4], [5, 6]];

console.log(num);
console.log(num.length);
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[0][0]);
console.log(num.typeof);

// Q 1

let game = [["x", null, "o"], [null, "x", null], ["o", null, "x"]];

console.log(game);
console.log(game[0]);
console.log(game[0][1]);

game[0][1] = "o";
console.log(game);

// Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
// For example:for array[7,9,0,-2] and n=3
// Print,[7,9,0]

let arr9 = [7, 9, 0, -2];
let n = 3;

let ans = arr9.slice(0, n);
let ans1 = arr9.slice(arr9.length-n);
console.log(ans);
console.log(ans1);

// Write a JavaScript program to check whether a string is blank or not.

let str = "";

if (str.length == 0){
    console.log("string is empty");
} else{
    console.log("string is not empty");
}


