document.getElementById('phoneForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const phoneInput = document.getElementById('phone').value.trim();
    const alertContainer = document.getElementById('phoneAlert');

    // Remove existing alert message if present
    if (alertContainer) {
        alertContainer.remove();
    }

    // Regular expression to validate phone number format (adjust according to your requirement)
    const phoneRegex = /^[0-9]{10}$/;

    // Check if phone input is empty or invalid
    if (!phoneInput) {
        showAlert('Please enter your phone number.');
        return;
    } else if (!phoneRegex.test(phoneInput)) {
        showAlert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Redirect to verifyOTP.html
    window.location.href = 'verifyOTP.html';
});

document.getElementById('changePhoneLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('otpForm').classList.add('d-none');
    document.getElementById('phoneForm').classList.remove('d-none');
    document.getElementById('main-heading').innerText = 'Sign In';
    document.getElementById('sub-heading').innerText = 'Log in to your account to continue';
    document.getElementById('myTab').classList.remove('d-none'); // Show the nav-tabs
});

function showAlert(message) {
    const alertMessage = document.createElement('div');
    alertMessage.id = 'phoneAlert';
    alertMessage.className = 'alert-message';
    alertMessage.innerText = message;
    document.getElementById('phone').parentNode.parentNode.appendChild(alertMessage);
}

function togglePassword() {
    const passwordField = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('toggle-password-icon');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePasswordIcon.classList.remove('fa-eye');
        togglePasswordIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        togglePasswordIcon.classList.remove('fa-eye-slash');
        togglePasswordIcon.classList.add('fa-eye');
    }
}
