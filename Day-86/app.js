document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('user-form');

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Extracting form data
        const nameInput = document.getElementById('name');
        const userName = nameInput.value;

        // Displaying the name in an alert box
        alert("Hello, " + userName + "!");

        // Clearing the input field
        nameInput.value = '';
    });

    // Event listener for mouseover event
    form.addEventListener('mouseover', function() {
        console.log('Mouse over the form!');
    });

    // Event listener for keydown event
    document.addEventListener('keydown', function(event) {
        console.log('Key pressed: ' + event.key);
    });
});