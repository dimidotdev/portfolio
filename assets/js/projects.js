document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');

          const filter = button.dataset.filter;

          projects.forEach(project => {
              if (filter === 'all' || project.dataset.category === filter) {
                  project.style.display = 'flex';
              } else {
                  project.style.display = 'none';
              }
          });
      });
  });
});