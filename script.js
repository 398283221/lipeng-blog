const toggleButton = document.getElementById('night-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    document.querySelectorAll('a').forEach(link => link.classList.toggle('night-mode'));
    document.querySelector('header').classList.toggle('night-mode');
    document.querySelector('footer').classList.toggle('night-mode');
    document.querySelector('button').classList.toggle('night-mode');
});