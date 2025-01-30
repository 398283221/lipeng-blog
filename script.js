const toggleButton = document.getElementById('night-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
});