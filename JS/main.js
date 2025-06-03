document.addEventListener('DOMContentLoaded', function() {
  const curriculumLinks = document.querySelectorAll('.curriculum-list a');
  const iframe = document.getElementById('content-frame');
  
  curriculumLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all list items
      document.querySelectorAll('.curriculum-list li').forEach(li => {
        li.classList.remove('active');
      });
      
      // Add active class to clicked item's parent li
      this.parentElement.classList.add('active');
      
      // Load content in iframe
      iframe.src = this.getAttribute('href');
    });
  });
});
