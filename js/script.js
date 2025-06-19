/*
==============================================
TheProtoPixel - Creative Design Agency
JavaScript Functionality
==============================================
*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Allow scrolling but prevent pinch zoom on mobile
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Particles.js for hero background
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        // Add scrolled class to navbar when scrolled
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
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

    // Pricing tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Testimonial slider dots functionality
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Implement testimonial slide functionality here
            // This is a simplified version - in a real implementation, 
            // you would slide to the corresponding testimonial
            const testimonials = document.querySelectorAll('.testimonial-card');
            
            // Hide all testimonials first
            testimonials.forEach(testimonial => {
                testimonial.style.opacity = '0';
                setTimeout(() => {
                    testimonial.style.display = 'none';
                }, 300);
            });
            
            // Show the selected testimonial
            setTimeout(() => {
                if (testimonials[index]) {
                    testimonials[index].style.display = 'block';
                    setTimeout(() => {
                        testimonials[index].style.opacity = '1';
                    }, 50);
                }
            }, 300);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const portfolioInfo = this.querySelector('.portfolio-info');
            if (portfolioInfo) {
                portfolioInfo.style.transform = 'translateY(0)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const portfolioInfo = this.querySelector('.portfolio-info');
            if (portfolioInfo) {
                portfolioInfo.style.transform = 'translateY(100px)';
            }
        });
    });

    // Create a simple animation for service cards on scroll
    const animateOnScroll = () => {
        const serviceCards = document.querySelectorAll('.service-card');
        const windowHeight = window.innerHeight;
        
        serviceCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial call to animateOnScroll
    animateOnScroll();
    
    // Call animateOnScroll on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Portfolio filter functionality (for subpages)
    const portfolioFilter = document.querySelector('.portfolio-filter');
    if (portfolioFilter) {
        const filterButtons = portfolioFilter.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-gallery-item');
        
        // Filter items based on tag
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter').toLowerCase();
                
                // Show/hide items based on filter
                portfolioItems.forEach(item => {
                    const itemTags = item.getAttribute('data-tags').toLowerCase();
                    
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        if (itemTags.includes(filterValue)) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }

    // Portfolio search functionality
    const portfolioSearch = document.querySelector('.portfolio-search input');
    if (portfolioSearch) {
        portfolioSearch.addEventListener('keyup', function() {
            const searchValue = this.value.toLowerCase();
            const portfolioItems = document.querySelectorAll('.portfolio-gallery-item');
            
            portfolioItems.forEach(item => {
                const tags = item.getAttribute('data-tags').toLowerCase();
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (tags.includes(searchValue) || title.includes(searchValue) || description.includes(searchValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    }

    // Dynamic client logo loading
    // In a real implementation, you would fetch these from the server
    // This is a simplified version for demonstration
    function loadClientLogos() {
        // This would typically be an AJAX call to fetch logos from the server
        // For demo purposes, we're using placeholder logos
        const clientLogos = [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Spotify_logo_2013.svg/1200px-Spotify_logo_2013.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png'
        ];
        
        // In a real implementation, you would load these from the /clients/ folder
        // const clientsGrid = document.querySelector('.clients-grid');
        // if (clientsGrid) {
        //     // Clear existing logos
        //     clientsGrid.innerHTML = '';
        //     
        //     // Add logos from array
        //     clientLogos.forEach(logo => {
        //         const clientLogo = document.createElement('div');
        //         clientLogo.className = 'client-logo';
        //         
        //         const img = document.createElement('img');
        //         img.src = logo;
        //         img.alt = 'Client Logo';
        //         
        //         clientLogo.appendChild(img);
        //         clientsGrid.appendChild(clientLogo);
        //     });
        // }
    }

    // Call loadClientLogos on page load
    loadClientLogos();
});

// Add a simple preloader
window.addEventListener('load', function() {
    // Create preloader element
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="loader">
            <div class="animated-logo" style="width: 80px; height: 80px;"></div>
        </div>
    `;
    
    // Add preloader styles
    const style = document.createElement('style');
    style.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--dark-color);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        .loader {
            text-align: center;
        }
    `;
    
    document.head.appendChild(style);
    document.body.prepend(preloader);
    
    // Hide preloader after 1.5 seconds
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        // Remove preloader from DOM after transition
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1500);
});
