// Function to get URL parameters
function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to display search results
function displayResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result-item');
            resultElement.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.description}</p>
            `;
            resultsContainer.appendChild(resultElement);
        });
    }
}

// Function to perform a simple search (example)
function searchArticles(query) {
    const articles = [
        { title: 'Green Tech Startups to Watch in 2025', description: 'Discover the most promising green tech startups that are set to make a significant impact in 2025.' },
        { title: 'The Evolution of Wearable Tech: What\'s Next?', description: 'Explore the future of wearable technology and what\'s next for the industry.' },
        { title: '5G Technology: Transforming Connectivity and Beyond', description: 'Understand the impact of 5G technology on various sectors and its transformative potential.' },
        // Add more articles as needed
    ];

    // Filter articles based on query
    const filteredResults = articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.description.toLowerCase().includes(query.toLowerCase())
    );

    displayResults(filteredResults);
}

// Get the search query from the URL
const query = getQueryParams('query');

// Perform the search if a query is present
if (query) {
    searchArticles(query);
}