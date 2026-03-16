// Dropdown hover interaction
const navGroups = document.querySelectorAll('.navbar-links .group');

navGroups.forEach(function(group) {
  const dropdown = group.querySelector('div.absolute');
  if (!dropdown) return;

  let isOverGroup = false;
  let isOverDropdown = false;

  function showDropdown() {
    dropdown.classList.remove('opacity-0', 'invisible');
    dropdown.classList.add('opacity-100', 'visible');
  }

  function hideDropdown() {
    dropdown.classList.add('opacity-0', 'invisible');
    dropdown.classList.remove('opacity-100', 'visible');
  }

  group.addEventListener('mouseenter', () => {
    isOverGroup = true;
    showDropdown();
  });

  group.addEventListener('mouseleave', () => {
    isOverGroup = false;
    setTimeout(() => {
      if (!isOverGroup && !isOverDropdown) hideDropdown();
    }, 50);
  });

  dropdown.addEventListener('mouseenter', () => {
    isOverDropdown = true;
    showDropdown();
  });

  dropdown.addEventListener('mouseleave', () => {
    isOverDropdown = false;
    setTimeout(() => {
      if (!isOverGroup && !isOverDropdown) hideDropdown();
    }, 50);
  });
});

// Tilt card animation
const tiltCards = document.querySelectorAll('.clickcard');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateLimit = 15;
    const rotateY = ((x - centerX) / centerX) * rotateLimit;
    const rotateX = -((y - centerY) / centerY) * rotateLimit;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

