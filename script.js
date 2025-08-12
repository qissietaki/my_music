// Add a shadow to the sticky header when scrolling
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 10) { // Add shadow after scrolling down a bit
    header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
  } else {
    header.style.boxShadow = 'none';
  }
});