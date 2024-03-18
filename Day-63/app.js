let str = "apple";

if ((str[0] === 'a') && (str.length > 3)) {
    console.log("Good String");
} else {
    console.log("Bad String");
}


let num = 12;

if ((num%3 === 0) && (num+1 == 15) || (num-1 == 11)) {
    console.log("Safe");
} else {
    console.log("Unsafe");
}


if (" ") {
    console.log("True");
} else {
    console.log("False");
}


let side1 = 120;
let side2 = 0;
let side3 = 0;

if((side1 == side2) && (side1 == side3)){
    console.log(`Equilateral triangle.`)
}
  else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
    console.log(`Isosceles triangle.`)
}
  else{
    console.log(`Scalene triangle.`)
}