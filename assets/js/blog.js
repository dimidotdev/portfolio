document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const posts = document.querySelectorAll('.post-card');

  categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');

          const category = button.dataset.category;

          posts.forEach(post => {
              const categories = JSON.parse(post.dataset.categories);
              if (category === 'all' || categories.includes(category)) {
                  post.style.display = 'block';
              } else {
                  post.style.display = 'none';
              }
          });
      });
  });
});