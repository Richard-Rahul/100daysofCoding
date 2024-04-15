document.getElementById("admitCardForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    let name = document.getElementById("name").value;
    let exam = document.getElementById("exam").value;
    let date = document.getElementById("date").value;
    let venue = document.getElementById("venue").value;
  
    // Update admit card with form values
    document.getElementById("admitCardName").textContent = "Name: " + name;
    document.getElementById("admitCardExam").textContent = "Exam Name: " + exam;
    document.getElementById("admitCardDate").textContent = "Exam Date: " + date;
    document.getElementById("admitCardVenue").textContent = "Exam Venue: " + venue;
  
    // Show the admit card
    document.getElementById("admitCard").classList.remove("hidden");
  });
  