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



