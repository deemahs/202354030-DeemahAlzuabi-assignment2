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


// Select project filtering elements

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

const filterState =
    document.getElementById("filterStatus");

// ========================================
// Dark / Light Mode
// ========================================


// Apply theme and update accessibility

function applyTheme(isDark) {

    document.body.classList.toggle("dark-mode", isDark);

    themeButton.textContent =
        isDark ? "☀️" : "🌙";

    themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeButton.setAttribute("aria-pressed", String(isDark));
}


// Restore saved theme from localStorage

try {
    const savedTheme = localStorage.getItem("portfolioTheme");

    applyTheme(savedTheme === "dark");

} catch (error) {
    applyTheme(false);
    console.warn("Could not load theme preference:", error);
}

// Save selected theme

themeButton.addEventListener("click", function () {

     const isDark =
        !document.body.classList.contains(("dark-mode");
        applyTheme(isDark);

     try {
        localStorage.setItem(
            "portfolioTheme",
            isDark ? "dark" : "light"
        );

    } catch (error) {
        console.warn("Could not save theme preference:", error);
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