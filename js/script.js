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
        !document.body.classList.contains("dark-mode");
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


// Dynamic Project Filtering

// here I filtered projects based on selected technology which i have added in the HTML file

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;

        let visibleCount = 0;

        filterButtons.forEach(function (item) {

            const selected = item === button;

            item.classList.toggle("active", selected);

            item.setAttribute(
                "aria-pressed",
                String(selected)
            );

        });

        projectCards.forEach(function (card) {

            const technologies =
                card.dataset.technologies.split(" ");

            const matches =
                filter === "all" || technologies.includes(filter);

            card.hidden = !matches;

            if (matches) {
                visibleCount++;
            }

        });

        if (visibleCount === 0) {

            filterState.textContent =
                "No projects found for this filter. " +
                "Try another technology.";

        } else {

            const projectWord =
                visibleCount === 1 ? "project" : "projects";

            if (filter === "all") {

                filterState.textContent =
                    `Showing ${visibleCount} ${projectWord}.`;

            } else {

                filterState.textContent =
                    `Showing ${visibleCount} ${projectWord} ` +
                    `using ${button.textContent.trim()}.`;

            }

        }

    });

});

// ========================================
// Contact Form
// ========================================

contactForm.addEventListener("submit", function (event) {

    // Prevent the form from actually submitting
    event.preventDefault();

       const nameFiled =
        document.getElementById("name");

    const emailFiled =
        document.getElementById("email");

    const messageFiled =
        document.getElementById("message");

        // Clear previous validation errors
         const fields = [nameFiled, emailFiled, messageFiled];

    fields.forEach(function (field) {
        field.removeAttribute("aria-invalid");
    });

    
    const name =
        nameFiled.value.trim();

    const email =
        emailFiled.value.trim();

    const message =
        messageFiled.value.trim();


    // Validate user input
    let error = "";
    let invalidFields = null;

    if (!name) {

        error = "Please enter your name.";
        invalidFields = nameFiled;

    } else if (!email) {

        error = "Please enter your email.";
        invalidFields = emailFiled;

    } else if (
        !emailFiled.validity.valid ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

        error = "Please enter a valid email address.";
        invalidFields = emailFiled;

    } else if (!message) {

        error = "Please enter your message.";
        invalidFields = messageFiled;

    }
    // Display error feedback

    if (error) {

        invalidFields.setAttribute("aria-invalid", "true");

        formMessage.className = "form-message error";
        formMessage.textContent = error;

        invalidFields.focus();

        return;
    }
    
    // Display confirmation after validation

    formMessage.className = "form-message success";

    formMessage.textContent =
        `Thank you, ${name}! Your form is valid. ` +
        "This portfolio demo does not send messages.";

    // Clear form fields
    contactForm.reset();

});

// ========================================
// Current Year
// ========================================

year.textContent =
    new Date().getFullYear();