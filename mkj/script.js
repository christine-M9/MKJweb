/* =========================
   SMOOTH SCROLLING
========================= */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href')?.substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile menu after click
    if (navLinksContainer) {
      navLinksContainer.classList.remove('show');
    }
  });
});


/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinkItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href')?.substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});


/* =========================
   MOBILE NAV TOGGLE
========================= */
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

if (hamburger && navLinksContainer) {
  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
  });
}


/* =========================
   GOOGLE CALENDAR (OPTIONAL)
========================= */
const bookBtn = document.getElementById('bookSessionBtn');

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const calendarLink =
      "https://calendar.google.com/calendar/u/0/r/eventedit" +
      "?text=Motivational+Talk+Booking" +
      "&details=School+Motivational+Talk+with+Juma+Mathew+Khaleyi" +
      "&location=Kenya" +
      "&ctz=Africa/Nairobi";

    window.open(calendarLink, "_blank");
  });
}
