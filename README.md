# Deemah Alzuabi - Personal Portfolio

## Project Description

This project is an interactive and responsive personal portfolio website developed for Assignment 2: Interactive Features.

The website builds on the portfolio created in Assignment 1 by adding new interactive features and improving the user experience using JavaScript.

The portfolio introduces me as a Computer Science student, provides information about my background and technical skills, presents selected projects and experiences, and includes a contact section.

The website was developed using HTML, CSS, and JavaScript with a responsive design that supports desktop, tablet, and mobile devices.

## Website Sections

### Home

The Home section is the first section visitors see when opening the website.

It includes:

* A welcome message
* My name
* My field of study
* A short introduction
* A "Know More About Me" button
* A "My Projects" button
* A contact form

The buttons allow users to navigate directly to different sections of the portfolio.

### About Me

The About Me section provides a short introduction about my academic background, interests, and technical skills.

Some of the skills displayed in this section include HTML, CSS, JavaScript, React, Python, Java, Git, and Figma.

### Projects

The Projects section presents selected projects and experiences.

Each project includes a title, short description, and relevant technologies or skills.

A new project filtering feature allows users to filter projects based on technologies such as JavaScript, Python, and Figma.

The displayed projects update dynamically based on the selected filter.

A feedback message also shows the number of matching projects.

### Contact

The Contact section provides a form containing Name, Email, and Message fields.

JavaScript is used to validate user input and display error messages when required fields are empty or the email format is invalid.

When all fields are valid, a confirmation message is displayed.

No backend is connected, so the form does not send actual messages.

## Features

* Responsive single-page portfolio
* Smooth scrolling between sections
* About Me section
* Skills display
* Projects section
* Contact form
* Dark/light mode
* JavaScript form interaction
* Automatic current year
* Responsive desktop, tablet, and mobile layouts
* Dynamic project filtering using JavaScript
* Theme preference saved using localStorage
* Contact form validation
* Error and success feedback messages
* Project filtering feedback
* Hover effects and smooth transitions
* Accessibility improvements using ARIA attributes

## Technologies Used

* HTML
* CSS
* JavaScript
* CSS Grid
* Flexbox
* Media Queries
* localStorage
* Git
* GitHub

## Project Structure

```text
assignment-2/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

## How to Run the Project

No installation or external dependencies are required.

1. Download or clone the GitHub repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser.

The website can also be opened using the Live Server extension in Visual Studio Code.

## Responsive Design

The portfolio was designed to work on desktop, tablet, and mobile devices.

CSS Grid and Flexbox are used to organize the website layout, while media queries adjust the design for different screen sizes.

On smaller screens, elements such as the About Me content and project cards change from multi-column layouts to single-column layouts to improve readability and usability.

The website was tested by resizing the browser and using browser Developer Tools.

## JavaScript

JavaScript is used to add interactivity to the website.

The main JavaScript features include:

* Switching between dark and light themes
* Saving the selected theme using localStorage
* Filtering projects based on selected technologies
* Validating contact form inputs
* Displaying feedback messages
* Automatically displaying the current year in the footer

## AI Usage

ChatGPT was used as an AI-assisted development and learning tool during this assignment.

I used ChatGPT to understand the assignment requirements, review JavaScript code, identify errors, and improve interactive features such as project filtering, theme preference storage, and contact form validation.

I also used ChatGPT to help organize and update the project documentation like fixing grammar mistakes.

I reviewed and customized the suggestions to match my existing portfolio structure and design.

There is more information about AI usage is available in: `ai-usage-report.md`

## Technical Documentation

Detailed information about the website structure, interactive features, and implementation is available in `technical-documentation.md` .