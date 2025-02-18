document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById('commentName').value;
    const text = document.getElementById('commentText').value;
    const commentsContainer = document.getElementById('commentsContainer');

    // Create a new comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
    
    // Append the new comment to the comments container
    commentsContainer.appendChild(commentElement);
    
    // Clear the form
    document.getElementById('commentForm').reset();
});