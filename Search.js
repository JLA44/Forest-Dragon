// Get references to the DOM elements
const searchIcon = document.getElementById('searchIcon');
const searchPopup = document.getElementById('searchPopup');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Add click event listener to the search icon
searchIcon.addEventListener('click', function() {
    // Toggle the display of the search popup
    if (searchPopup.style.display === 'block') {
        searchPopup.style.display = 'none';
    } else {
        searchPopup.style.display = 'block';
        searchInput.focus(); // Focus on the search input when the popup is displayed
    }
});

// Add submit event listener to the search form
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const query = searchInput.value.trim(); // Get the trimmed value of the search input

    if (query) {
        // Redirect to a search results page with the query as a parameter
        window.location.href = `Search_Results.html?query=${encodeURIComponent(query)}`;
        searchInput.value = ''; // Clear the search input
        searchPopup.style.display = 'none'; // Hide the search popup
    } else {
        alert('Please enter a search term.'); // Alert the user if the search input is empty
    }
});

// Add click event listener to the document
document.addEventListener('click', function(event) {
    // Hide the search popup if the click is outside the search popup and search icon
    if (!searchPopup.contains(event.target) && !searchIcon.contains(event.target)) {
        searchPopup.style.display = 'none';
    }
});