// Add click event listener to the profile icon
document.getElementById('profileIcon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    const loginPopup = document.getElementById('loginPopup');
    // Toggle the display of the login popup
    loginPopup.style.display = loginPopup.style.display === 'block' ? 'none' : 'block';
});

// Add click event listener to the document
document.addEventListener('click', function(event) {
    const loginPopup = document.getElementById('loginPopup');
    const profileIcon = document.getElementById('profileIcon');
    // Hide the login popup if the click is outside the login popup and profile icon
    if (event.target !== profileIcon && !profileIcon.contains(event.target) && 
        event.target !== loginPopup && !loginPopup.contains(event.target)) {
        loginPopup.style.display = 'none';
    }
});

// Add submit event listener to the login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMessage = document.getElementById('errorMessage'); // Get reference to the error message element

    // Check if the username and password are correct
    if (username === 'admin' && password === 'password') {
        errorMessage.style.display = 'none'; // Hide the error message
        errorMessage.textContent = ''; // Clear the error message

        window.location.href = 'Pages/Dashboard.html'; // Redirect to the dashboard page
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.'; // Display error message if credentials are incorrect
        errorMessage.style.display = 'block'; // Show the error message
    }
});