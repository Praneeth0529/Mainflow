document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    if (name === '' || email === '' || message === '') {
        feedback.textContent = 'All fields are required.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Form submitted successfully!';
        feedback.style.color = 'green';
        // Here you can add code to send form data to the server
    }
});
