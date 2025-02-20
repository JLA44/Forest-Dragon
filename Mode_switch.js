// Add click event listener to the mode toggle button
document.getElementById('mode-toggle').addEventListener('click', function() {
    const body = document.body;
    // Toggle the dark-mode and light-mode classes on the body element
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Determine the current mode and update the button text accordingly
    const mode = body.classList.contains('dark-mode') ? 'Light' : 'Dark';
    this.textContent = `Switch to ${mode} Mode`;
});