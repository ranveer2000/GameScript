const toggle = document.getElementById('darkModeToggle');

// Load saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
});


const navbar = document.querySelector('.navbar-bar');

if (navbar) {
  navbar.addEventListener('mousemove', (e) => {
    const rect = navbar.getBoundingClientRect();
    
    // Track mouse coordinates relative to the navbar container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    navbar.style.setProperty('--mouse-x', `${x}px`);
    navbar.style.setProperty('--mouse-y', `${y}px`);
  });
}
