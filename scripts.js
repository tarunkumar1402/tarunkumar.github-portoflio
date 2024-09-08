// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to smoothly scroll to the clicked section
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId); // Get the section by ID
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to section
    }
}

// Function to show the clicked section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
            section.classList.remove('hidden');
        } else {
            section.classList.remove('active');
            section.classList.add('hidden');
        }
    });
}
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active-link'); // Remove the active class
    });
}



// Add click event listeners to all nav links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const sectionId = this.getAttribute('data-section'); // Get the section ID
        showSection(sectionId); // Show the corresponding section
        scrollToSection(sectionId); // Scroll to the corresponding section

        removeActiveClass(); // Remove active class from all links
        this.classList.add('active-link'); 
    });
});

// Show default section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Default to home section
});
 