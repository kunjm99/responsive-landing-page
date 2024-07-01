// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item a');

    // Change navbar background color on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Show and hide sections based on navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});
