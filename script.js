var form = document.getElementById('passwordForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retypePassword').value;
    var message = document.getElementById('message');

    if (password === retypePassword) {
        message.style.color = 'green';
        message.textContent = 'Password match. Form submitted successfully!';

    } else {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match. Please try again.';
    }
});
