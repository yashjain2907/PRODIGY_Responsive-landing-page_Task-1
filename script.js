document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
      } else {
        navbar.style.backgroundColor = '#333';
      }
    });
  });
  