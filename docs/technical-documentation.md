# Technical Documentation

## 1. Project Overview

This project is an interactive and responsive personal portfolio website developed using HTML, CSS, and JavaScript.
It builds on Assignment 1 by adding dynamic project filtering, theme preference storage, and improved contact form validation.
The website uses a single-page structure where users can scroll or use navigation links to move between different sections.

The main sections are:

* Home
* About Me
* Projects
* Contact

## 2. HTML Structure

HTML5 is used to define the structure and content of the website.

The website uses semantic HTML elements such as:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `form`
* `footer`

Using separate sections makes the content easier to organize and navigate.

## 3. Home Section

The Home section is the landing area of the website.

It introduces me as Deemah Alzuabi, a Computer Science student.

It also includes buttons that allow visitors to navigate directly to the About Me and Projects sections.

## 4. About Me Section

The About Me section provides information about my academic background, interests, and technical skills.

The layout uses CSS Grid to organize the profile area and written information.

The skills are displayed as individual visual elements.

## 5. Projects Section

The Projects section contains project cards.

Each project includes:

* Project title
* Short description
* Project image
* Relevant technologies or skills

CSS Grid is used to display the projects in multiple columns on larger screens.

On smaller screens, the project cards change to a single-column layout.


## Dynamic Project Filtering

JavaScript is used to filter projects based on the technology selected by the user.
The filter buttons include All, JavaScript, Python, and Figma.

Each project card contains a data-technologies attribute that identifies the technologies used in that project.

When a user clicks a filter button, JavaScript checks the technologies associated with each project.

Matching projects are displayed, while non-matching projects are hidden using the hidden property.

The selected filter button is also highlighted using an active CSS class.

A feedback message displays the number of matching projects.

If no projects match the selected filter, a message informs the user that no projects were found.

## 6. Contact Section

The Contact section contains a form with:

* Name
* Email
* Message

A backend is not required for this assignment.

JavaScript uses `preventDefault()` to prevent a real form submission and provides feedback to the user instead.


## Form Validation

JavaScript validates the contact form when the user clicks the Send Message button.

The validation checks whether:

The name field is empty.

The email field is empty.

The email address has a valid basic format.

The message field is empty.

If any input is invalid, an error message is displayed and the invalid field receives focus.

The aria-invalid attribute is used to identify invalid fields.

If all inputs are valid, a confirmation message is displayed and the form fields are cleared.

The confirmation message explains that the portfolio is a demonstration and does not send actual messages.

## 7. CSS and Visual Design

CSS is used to control the visual appearance and layout of the portfolio.

The main color palette consists of:

* Pink
* Black
* White

Pink is used as the main accent color, while black and white provide contrast.

The website also uses:

* Borders
* Spacing
* Hover effects
* Transitions
* Responsive typography
* Cards
* Buttons

Assignment 2 also includes styling for project filter buttons, active filter states, form feedback messages, and project animations.

CSS transitions are used to make interactions smoother.

## 8. Responsive Design

The website was designed to work on desktop, tablet, and mobile screen sizes.

CSS Grid and Flexbox are used to create flexible layouts.

Media queries are used to modify the layout when the screen width becomes smaller.

For example, project cards are displayed next to each other on larger screens and vertically on smaller screens.

The About Me section also changes from a multi-column layout to a single-column layout on smaller devices.

The website was tested using browser resizing and browser Developer Tools.

## 9. JavaScript Functionality

### Dark/Light Mode

JavaScript listens for a click on the theme button.

When the button is clicked, JavaScript adds or removes a `dark-mode` class.

CSS uses this class to change the colors of the website.

### Contact Form Interaction

JavaScript listens for a click on the theme button.

When the button is clicked, JavaScript adds or removes the dark-mode class.

CSS uses this class to change the colors of the website.

## Theme Preference Using localStorage

The selected theme is saved using the browser's localStorage.

When the page loads, JavaScript checks whether a previously selected theme is stored.

If a saved theme exists, it is applied automatically.

This allows the website to remember the user's theme preference after refreshing the page.

A try/catch statement is used to handle possible localStorage errors without stopping the theme switching functionality.

## Project Filtering

JavaScript uses event listeners to detect when users click the filter buttons.

The selected technology is compared with the technologies stored in each project card.

The displayed projects and feedback message are updated dynamically.

Contact Form Interaction

JavaScript listens for the contact form submission.

The default form submission is prevented because the assignment does not require a backend.

Input validation is performed before displaying a confirmation message.

Error messages are shown when the input is invalid.

### Automatic Current Year

JavaScript uses the `Date` object to retrieve the current year and display it automatically in the footer.

## 10. Error Handling and User Feedback
The website provides feedback to users during interactions.
The contact form displays error messages when required fields are empty or the email format is invalid.
The form displays a confirmation message after successful validation.
The project filtering feature updates a message showing the number of matching projects.
The filtering logic also includes a message for cases where no projects match the selected technology.
The theme switching feature handles localStorage errors using try/catch.

## 11. Testing

The following features should be tested before submission:

* Navigation links
* About Me button
* Projects button
* Smooth scrolling
* Dark/light mode
* Theme preference after refreshing the page
* Project filtering buttons
* Project filtering feedback
* Contact form with empty inputs
* Contact form with an invalid email
* Contact form with valid inputs
* Responsive layout on desktop, tablet, and mobile devices
* Testing results should be recorded after completing the checks.

## 12. Performance

The website is lightweight because it uses standard HTML, CSS, and JavaScript without large external frameworks.

The project separates HTML, CSS, and JavaScript into different files to keep the code organized and maintainable.

## 13. Browser Compatibility

The website uses standard web technologies and is intended to work on modern browsers such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

Browser compatibility should be verified during final testing.

## 14. Future Improvements

Possible future improvements include:
* Adding additional projects
* Adding a real profile image
* Adding GitHub and LinkedIn links
* Adding a downloadable CV
* Connecting the contact form to a backend
* Adding more project filtering categories


