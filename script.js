// Small interactive helpers: mobile nav toggle, testimonial rotation, set year
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle && navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Testimonials carousel (simple)
  const testimonials = Array.from(document.querySelectorAll('.testimonial'));
  let tIndex = 0;
  function showTestimonial(i){
    testimonials.forEach((t, idx) => t.classList.toggle('active', idx === i));
  }
  if(testimonials.length > 1){
    setInterval(() => {
      tIndex = (tIndex + 1) % testimonials.length;
      showTestimonial(tIndex);
    }, 5000);
  }

  // Current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = (new Date()).getFullYear();
});