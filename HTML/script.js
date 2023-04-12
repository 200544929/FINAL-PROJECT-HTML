// Navigation functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Contact form functionality
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  
  // Validate form inputs
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields.');
    return;
  }
  
  // Send form data to server
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  
  fetch('https://example.com/send-message', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    form.reset();
  })
  .catch(error => {
    alert(error.message);
  });
});