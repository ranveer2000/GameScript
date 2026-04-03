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