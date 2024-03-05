document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');

  registerForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Retrieve form data
      var username = document.getElementById('registerUsername').value;
      var email = document.getElementById('registerEmail').value;
      var password = document.getElementById('registerPassword').value;

      // Construct form data
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);

      // Send registration request to server
      fetch('/register', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              console.log('Registration successful'); // Log message to console
              alert('Registration successful'); // Display success message to user
          } else {
              console.error('Registration failed:', data.message); // Log error message to console
              alert('Registration failed: ' + data.message); // Display error message to user
          }
      })
      .catch(error => {
          console.error('An error occurred during registration:', error); // Log error to console
          alert('An error occurred during registration. Please try again later.'); // Display error message to user
      });
  });
});

  