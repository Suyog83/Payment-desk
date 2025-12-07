// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Service card hover animation
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Mobile menu toggle (for responsive design)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger menu button
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add button to navbar (only on mobile)
    if (window.innerWidth <= 768) {
        navbar.insertBefore(menuButton, navLinks);
        navLinks.style.display = 'none';
        
        menuButton.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
        });
    }
}

// Initialize mobile menu
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Add loading animation for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('mobile-menu-button')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            
            // Simulate processing (remove this in production and replace with actual API calls)
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 1500);
        }
    });
}); 