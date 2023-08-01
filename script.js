// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 50;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;
  
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  
