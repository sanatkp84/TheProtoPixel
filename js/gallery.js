/*
==============================================
TheProtoPixel - Gallery Pages JavaScript
==============================================
*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar functionality
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const backToTop = document.querySelector('.back-to-top');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Show/hide back to top button on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Smooth scroll for back to top button
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Gallery filtering functionality
    const galleryCategories = document.querySelectorAll('.gallery-category');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            galleryCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            const selectedCategory = this.getAttribute('data-category');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                // First remove the show class
                item.classList.remove('show');
                
                // If "all" category is selected or item matches selected category
                if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
                    // Add show class with a slight delay for staggered animation
                    setTimeout(() => {
                        item.classList.add('show');
                    }, Math.random() * 200); // Random delay for more natural animation
                }
            });
        });
    });

    // Trigger click on "all" category to initialize the gallery
    document.querySelector('.gallery-category.active').click();
});
