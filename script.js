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

// Funkcija, kuri gauna ir atnaujina dabartinį laiką
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Paleidžiame laikrodį ir nustatome, kad jis atsinaujintų kas sekundę
setInterval(updateClock, 1000);

// Inicialiai iškviečiame funkciją, kad laikrodis pasirodytų iškart
updateClock();

