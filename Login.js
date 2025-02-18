document.getElementById('profileIcon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = loginPopup.style.display === 'block' ? 'none' : 'block';
});


document.addEventListener('click', function(event) {
    const loginPopup = document.getElementById('loginPopup');
    const profileIcon = document.getElementById('profileIcon');
    if (event.target !== profileIcon && !profileIcon.contains(event.target) && 
        event.target !== loginPopup && !loginPopup.contains(event.target)) {
        loginPopup.style.display = 'none';
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const errorMessage = document.getElementById('errorMessage');

    if (username === 'admin' && password === 'password') {
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        window.location.href = 'Pages/Dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        errorMessage.style.display = 
        'block';
    }
});