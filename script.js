// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
if (toggle) {
  toggle.addEventListener('click', () => {
    const visible = navList.style.display === 'flex';
    navList.style.display = visible ? 'none' : 'flex';
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Download/signup form stub
const form = document.getElementById('download-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email.'); 
      return;
    }
    // Simulate sending link (replace with real integration later)
    alert(`Download link sent to ${email} (simulation).`);
    form.reset();
  });
}