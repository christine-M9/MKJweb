// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Book a session - open Google Calendar
const bookBtn = document.getElementById('bookSessionBtn');

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Google Calendar pre-filled event link
    const calendarLink = "https://calendar.google.com/calendar/u/0/r/eventedit?text=Motivational+Talk+Booking&details=School+Motivational+Talk&location=Your+Location&ctz=Africa/Nairobi";

    window.open(calendarLink, "_blank");
  });
}

// Optional: Highlight current section in navbar while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});
