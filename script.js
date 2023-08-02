// script.js

// Add smooth scrolling behavior to the navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Handle form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form input values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    // Display submitted values
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    
    // Clear form inputs
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
  });