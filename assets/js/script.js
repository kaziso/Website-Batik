// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Dark/Light Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Durasi animasi
    once: true, // Animasi hanya sekali
  });

  // Contoh: Toggle Dark Mode
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-theme');
};

// Tambahkan event listener jika diperlukan
document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.createElement('button');
  darkModeButton.innerText = 'Toggle Dark Mode';
  darkModeButton.addEventListener('click', toggleDarkMode);
  document.body.prepend(darkModeButton);
});

// Contoh: Menambahkan efek hover pada card
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
});