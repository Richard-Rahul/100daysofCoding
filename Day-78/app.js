// Example - 1

function myFunc(theArr) {
    theArr[0] = 30;
  }
  
const arr = [45];
  
myFunc(arr);
console.log(arr[0]); 
console.log(arr[0]);

// Example - 2

function bark() {
    console.log("Wolf");
}

bark.animal = "Dog";