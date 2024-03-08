// Q1 - Print the numbers from 0 to 15

for (let i = 1; i <=15; i++) {
    console.log("Number: ", i);
}

// Q2 - Print the numbers from 12 to 24

for (let i = 12; i <= 24; i++) {
    console.log("Number: ", i);
}

// Q3 - Print the ODD numbers from 7 to 31

for (let i = 7; i <= 31; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// Q4 - Print the EVEN numbers from 10 to -20

for (let i = 10; i >= -20; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// for (let i = 10; i >= -20; i--) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
// }