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
  
const hireMeButton = document.querySelector('.cta-button');
hireMeButton.addEventListener('click', function (e) {
  e.preventDefault();

  // Change "your_email@example.com" to your actual email address
  const email = 'your_email@example.com';
  const subject = 'Hiring Inquiry';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  window.location.href = mailtoLink;
});
