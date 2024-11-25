function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.toggle-btn');

    // Toggle the dark-mode class
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = 'Switch to Dark Mode';
    }
}

