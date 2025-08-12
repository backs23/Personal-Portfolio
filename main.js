// main.js - JavaScript for a simple webpage with smooth scrolling, active link highlighting, and section reveal animations
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('nav .links a').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({behavior:'smooth'});
                document.querySelector('nav .links').classList.remove('open');
            }
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav .links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (pageYOffset >= sec.offsetTop - 100) current = sec.id;
        });
        navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#'+current);
        });
    });

    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.right.links');
    
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.right.links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // Scroll to top button
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        scrollBtn.style.display = pageYOffset > 200 ? 'block' : 'none';
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
