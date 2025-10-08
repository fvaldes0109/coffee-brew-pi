/**
 * MOBILE NAVIGATION TOGGLE
 * Handles opening/closing the mobile navigation menu with accessibility support
 */

// Get DOM elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * Toggle mobile navigation menu
 * Updates ARIA attributes and CSS classes for accessibility
 */
function toggleNav() {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  
  // Update ARIA attribute
  navToggle.setAttribute('aria-expanded', !isExpanded);
  
  // Toggle active class for CSS transitions
  navMenu.classList.toggle('active');
  
  // Focus management - focus first link when opening menu
  if (!isExpanded) {
    // Small delay to allow transition to start
    setTimeout(() => {
      navLinks[0]?.focus();
    }, 100);
  }
}

/**
 * Close mobile navigation menu
 * Used for ESC key and when clicking nav links
 */
function closeNav() {
  navToggle.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('active');
}

/**
 * Handle keyboard navigation
 * Close menu with ESC key for better UX
 */
function handleKeyboard(e) {
  // Close menu when ESC is pressed
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    closeNav();
    navToggle.focus(); // Return focus to toggle button
  }
}

/**
 * Close menu when clicking a navigation link
 * Improves mobile UX by automatically closing menu
 */
function handleNavLinkClick() {
  // Only close on mobile (when toggle is visible)
  if (window.getComputedStyle(navToggle).display !== 'none') {
    closeNav();
  }
}

// Event listeners
if (navToggle) {
  navToggle.addEventListener('click', toggleNav);
}

// Close menu with ESC key
document.addEventListener('keydown', handleKeyboard);

// Close menu when clicking nav links (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', handleNavLinkClick);
});

/**
 * SMOOTH SCROLL FOR ANCHOR LINKS (OPTIONAL ENHANCEMENT)
 * Provides smooth scrolling behavior for in-page navigation
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip if href is just "#" or doesn't exist
    if (href === '#' || !href) return;
    
    const targetElement = document.querySelector(href);
    
    // Only prevent default and smooth scroll if target exists
    if (targetElement) {
      e.preventDefault();
      
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update focus for keyboard users (accessibility)
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus();
    }
  });
});

/**
 * ENTRANCE ANIMATION OBSERVER (OPTIONAL)
 * Respect prefers-reduced-motion for users who opt out
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Only add intersection observer animations if user hasn't requested reduced motion
if (!prefersReducedMotion) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe feature cards for staggered entrance
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
}

/**
 * LOG INITIALIZATION
 * Confirm script loaded successfully (can be removed in production)
 */
console.log('Ember Coffee: Navigation and interactions initialized');
