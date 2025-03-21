document.addEventListener('DOMContentLoaded', function () {
  // Dark/Light mode toggle with simplified functionality
  const modeToggle = document.querySelector('.mode-toggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change the icon based on the mode
    const icon = modeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const icon = modeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  // Project description expand/collapse functionality
  document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function () {
      const description = this.parentElement.querySelector('.project-description');
      description.classList.toggle('truncate');

      if (description.classList.contains('truncate')) {
        this.innerHTML = '<i class="fas fa-plus-circle"></i> Read More';
      } else {
        this.innerHTML = '<i class="fas fa-minus-circle"></i> Show Less';
      }

      this.classList.toggle('active');
    });
  });
});
