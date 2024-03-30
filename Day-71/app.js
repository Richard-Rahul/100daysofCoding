let names = ["Rahul", "Geeta", "Suggu", "Buggu"];
names.includes("Geeta");   // true
names.includes("Sandhya");  // false
console.log(names);


let primaryColor = ["Red", "White", "Black"];
let secondaryColor = ["Yellow", "Pink", "Blue"];

// concat() - merge 2 array
let finalColor = primaryColor.concat(secondaryColor);
console.log(finalColor);
console.log(primaryColor);
console.log(secondaryColor);

// reverse 

primaryColor.reverse();
console.log(primaryColor);

// Slice 

let colors = ["Red", "White", "Black", "Pink", "Yellow", "Blue"];
let final = colors.slice(2, 4);
console.log(final);