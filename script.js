// ====================================
// ESTEEM SKIN CLINIC - MAIN JAVASCRIPT
// ====================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  
  // ====================================
  // TESTIMONIAL ROTATION
  // ====================================
  
  const testimonials = document.querySelectorAll('.testimonial');
  
  if (testimonials.length > 0) {
    let currentTestimonial = 0;
    
    function rotateTestimonials() {
      testimonials[currentTestimonial].classList.remove('active');
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      testimonials[currentTestimonial].classList.add('active');
    }
    
    // Rotate every 5 seconds
    setInterval(rotateTestimonials, 5000);
  }
  
  
  // ====================================
  // MOBILE NAVIGATION TOGGLE
  // ====================================
  
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  
  // ====================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ====================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't preventDefault for links that are just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (mainNav) {
          mainNav.classList.remove('active');
        }
        if (navToggle) {
          navToggle.classList.remove('active');
        }
        
        // Scroll to target with offset for fixed header
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  // ====================================
  // HEADER SCROLL EFFECT (Optional)
  // ====================================
  
  const header = document.querySelector('.site-header');
  
  if (header) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      // Add shadow when scrolled
      if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }
  
  
  // ====================================
  // FOOTER YEAR AUTO-UPDATE
  // ====================================
  
  const yearElement = document.getElementById('year');
  
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
});


// ====================================
// LAZY LOAD IMAGES (Optional Enhancement)
// ====================================

// Uncomment if you want to add lazy loading for images
/*
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
  });
}
*/