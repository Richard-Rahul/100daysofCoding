// Function to calculate square using promises
function calculateSquare(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject("Please enter a valid number.");
    } else {
      resolve(num * num);
    }
  });
}

// Function to display result
function displayResult(result) {
  document.getElementById("result").innerText = result;
}

// Function to display error
function displayError(error) {
  document.getElementById("error").innerText = error;
}

// Form submission event listener
document
  .getElementById("numberForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const number = parseInt(document.getElementById("numberInput").value);

    // Calculating square using promise
    calculateSquare(number)
      .then((square) => {
        displayResult(`Square of ${number} is ${square}`);
        displayError("");
      })
      .catch((error) => {
        displayError(error);
        displayResult("");
      });
  });
