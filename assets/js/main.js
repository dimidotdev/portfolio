document.addEventListener('DOMContentLoaded', () => {
  // Adicionar classe active ao link atual
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
      }
  });

  // Animação suave ao scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});