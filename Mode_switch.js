document.getElementById('mode-toggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const mode = body.classList.contains('dark-mode') ? 'Light' : 'Dark';
    this.textContent = `Switch to ${mode} Mode`;
});
