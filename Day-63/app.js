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


if (true) {
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


let color = "green";

switch (color) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("Slow-Down");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Traffic light broken");
}


// Q - use switch statement to print the day of the week using a number variable "Day" with values 1 to 7.

let day = 6;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Day")
}