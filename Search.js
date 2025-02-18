const searchIcon = document.getElementById('searchIcon');
const searchPopup = document.getElementById('searchPopup');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', function() {
    if (searchPopup.style.display === 'block') {
        searchPopup.style.display = 'none';
    } else {
        searchPopup.style.display = 'block';
        searchInput.focus();
    }
});

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = searchInput.value.trim(); 

    if (query) {
        // Redirect to a search results page with the query as a parameter
        window.location.href = `Search_Results.html?query=${encodeURIComponent(query)}`;
        searchInput.value = '';
        searchPopup.style.display = 'none';
    } else {
        alert('Please enter a search term.');
    }
});

document.addEventListener('click', function(event) {
    if (!searchPopup.contains(event.target) && !searchIcon.contains(event.target)) {
        searchPopup.style.display = 'none';
    }
});