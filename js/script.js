// ========================================
// Select Elements
// ========================================

const themeButton =
    document.getElementById("themeButton");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const year =
    document.getElementById("year");


// ========================================
// Dark / Light Mode
// ========================================

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// ========================================
// Contact Form
// ========================================

contactForm.addEventListener("submit", function (event) {

    // Prevent the form from actually submitting
    event.preventDefault();


    const name =
        document.getElementById("name")
            .value
            .trim();


    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";


    // Clear form fields
    contactForm.reset();

});

// ========================================
// Current Year
// ========================================

year.textContent =
    new Date().getFullYear();