document.addEventListener("DOMContentLoaded", function() {
  let qrcode = new QRCode(document.querySelector(".qrcode")); 

  function generateQr() { 
      let inputData = document.getElementById("inputData").value.trim();
      if (!inputData) { 
          alert("Input Field Cannot be blank!"); 
      } else { 
          qrcode.makeCode(inputData); 
      }
  }

  document.getElementById("inputData").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          generateQr();
      }
  });

  document.getElementById("generateBtn").addEventListener("click", generateQr);
  qrcode.makeCode("Why did you scan me?"); 
});
