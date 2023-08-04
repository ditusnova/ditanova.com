
  
const hireMeButton = document.querySelector('.cta-button');
hireMeButton.addEventListener('click', function (e) {
  e.preventDefault();

  // Change "your_email@example.com" to your actual email address
  const email = 'your_email@example.com';
  const subject = 'Hiring Inquiry';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  window.location.href = mailtoLink;
});

// Get the current year and update the footer's copyright notice
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;