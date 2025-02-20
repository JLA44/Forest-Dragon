// Add submit event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the username, password, and confirm password fields
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    const errorMessage = document.getElementById('errorMessage'); // Get reference to the error message element

    // Check if the password and confirm password fields match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!'; // Display error message if passwords do not match
        errorMessage.style.display = 'block'; // Show the error message
        return; // Exit the function to prevent form submission
    }

    errorMessage.style.display = 'none'; // Hide the error message if passwords match
    this.submit(); // Submit the form
});