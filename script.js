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

// Stebime slinkimo įvykius
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    // Jei slinkta daugiau nei 300px, rodome mygtuką
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Funkcija, sklandžiai grįžtanti į puslapio pradžią
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('submitButton').addEventListener('click', function () {
    const form = document.getElementById('contactForm');

    // Gauti įvestis
    const name = form.name.value.trim();
    const surname = form.surname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();

    // Patikrinimai
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // El. pašto formatas
    const phoneRegex = /^[0-9]{9,}$/; // Tik skaičiai, bent 9 simboliai

    if (!emailRegex.test(email)) {
        alert('Įveskite tinkamą el. pašto adresą!');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Telefono numeris turi būti bent 9 skaitmenų ilgio ir turėti tik skaičius!');
        return;
    }

    if (address === '') {
        alert('Adresas negali būti tuščias!');
        return;
    }

    // Klausimų vertinimų surinkimas
    const feedback = {
        question1: parseInt(form.question1.value) || 0,
        question2: parseInt(form.question2.value) || 0,
        question3: parseInt(form.question3.value) || 0,
        question4: parseInt(form.question4.value) || 0,
        question5: parseInt(form.question5.value) || 0,
    };

    // Apskaičiuoti vidurkį
    const average =
        (feedback.question1 +
            feedback.question2 +
            feedback.question3 +
            feedback.question4 +
            feedback.question5) /
        5;

    // Nustatyti spalvą pagal vidurkį
    let averageColor = '';
    if (average < 4) {
        averageColor = 'red';
    } else if (average >= 4 && average < 7) {
        averageColor = 'orange';
    } else {
        averageColor = 'green';
    }

    // Sujungti el. paštą, telefoną ir adresą į vientisą tekstą
    const combinedText = `Kontaktai: ${email}, Tel. ${phone}, Adresas: ${address}`;

    // Atvaizduoti duomenis tinklalapyje
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>Pavardė:</strong> ${surname}</p>
        <p>${combinedText}</p>
        <p><strong>Ar esate patenkintas mūsų svetainės išvaizda?</strong> ${feedback.question1}</p>
        <p><strong>Ar mūsų paslaugos atitinka Jūsų lūkesčius?</strong> ${feedback.question2}</p>
        <p><strong>Kaip vertinate mūsų komandos profesionalumą?</strong> ${feedback.question3}</p>
        <p><strong>Ar esate patenkintas mūsų klientų aptarnavimu?</strong> ${feedback.question4}</p>
        <p><strong>Kaip tikėtina, kad rekomenduosite mus kitiems?</strong> ${feedback.question5}</p>
        <p style="color: ${averageColor};"><strong>Vidutinis vertinimas:</strong> ${average.toFixed(2)}</p>
    `;

    alert('Duomenys sėkmingai išsaugoti ir parodyti svetainėje!');
});

