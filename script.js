// Small progressive enhancement: highlight the active nav link based on scroll position.
// The site works fully without this — it's just a nicety.

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.topbar-nav a');

function setActiveLink() {
  let current = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--teal)' : '';
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
