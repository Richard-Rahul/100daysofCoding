// Callback function
function changeColor(callback) {
    // Simulating async operation (e.g., fetching data from server)
    setTimeout(() => {
      // Callback function executed
      callback();
    }, 1000);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colorBox = document.getElementById('colorBox');
  
    changeColorBtn.addEventListener('click', function() {
      // Change color callback function
      function changeColorCallback() {
        colorBox.style.backgroundColor = getRandomColor();
      }
  
      // Call the function with the callback
      changeColor(changeColorCallback);
    });
  });
  
  // Function to generate random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  