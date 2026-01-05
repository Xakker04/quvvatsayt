// ============================================
// UNIVERSITY WEBSITE - JAVASCRIPT
// Animations and Interactivity
// ============================================

// ---- ANIMATED NUMBER COUNTER ----
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(number => {
        observer.observe(number);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100; // Adjust speed
    const duration = 2000; // 2 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepDuration);
}

// ---- SMOOTH SCROLL FOR NAVIGATION ----
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ---- FADE IN ELEMENTS ON SCROLL ----
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.about-card, .program-card, .project-card, .club-card, .contact-info, .infra-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
}

// ---- NAVBAR SCROLL EFFECT ----
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ---- ACTIVE NAV LINK ----
function setupActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'var(--text-dark)';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--accent-amber)';
            }
        });
    });
}

// ---- BUTTON HOVER EFFECT ----
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
}

// ---- CARD HOVER EFFECT ----
function setupCardEffects() {
    const cards = document.querySelectorAll('.about-card, .program-card, .project-card, .club-card, .stat-card, .infra-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// ---- INITIALIZE ALL FUNCTIONS ----
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    setupSmoothScroll();
    setupScrollAnimations();
    setupNavbarScroll();
    setupActiveNavLink();
    setupButtonEffects();
    setupCardEffects();
    console.log('✓ University website initialized successfully');
});

// ---- UTILITY: Debounce function for scroll events ----
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
  document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});