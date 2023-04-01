// Register form DOM elements
const registerForm = document.querySelector("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const recaptchaWrapper = document.getElementById("recaptcha-wrapper");
const recaptchaError = document.getElementById("recaptcha-error");
const submitButton = document.getElementById("submit-btn");

// Google reCAPTCHA v2 API initialization
grecaptcha.ready(function() {
    grecaptcha.execute('6LcwUT4lAAAAAMb6jnZGHbfMzc2i8b2kS9kC70_0', {action: 'register'}).then(function(token) {
        // Send token to backend for verification
    });
});

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var button = document.getElementById("password-reveal-btn");
    if (passwordField.type === "password") {
        passwordField.type = "text";
       
    } else {
        passwordField.type = "password";
        
    }
}


// Enable submit button on reCAPTCHA validation
function onSubmit(token) {
    submitButton.disabled = false;
}

// Disable submit button on reCAPTCHA expiration
function onExpired() {
    submitButton.disabled = true;
}

// Handle reCAPTCHA errors
function onError() {
    recaptchaError.innerHTML = "There was an error with the reCAPTCHA. Please try again later.";
    submitButton.disabled = true;
}

// Validate password strength
function validatePasswordStrength(password) {
    // Password strength criteria
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const digitCriteria = /\d/.test(password);
    const symbolCriteria = /[^a-zA-Z0-9]/.test(password);

    // Calculate score based on criteria
    const score = lengthCriteria + uppercaseCriteria + lowercaseCriteria + digitCriteria + symbolCriteria;

    // Determine password strength level
    if (score === 5) {
        return "Very Strong";
    } else if (score === 4) {
        return "Strong";
    } else if (score === 3) {
        return "Moderate";
    } else if (score === 2) {
        return "Weak";
    } else {
        return "Very Weak";
    }
}

// Handle password input change
passwordInput.addEventListener("input", function() {
    const passwordStrength = validatePasswordStrength(passwordInput.value);
    const passwordStrengthDisplay = document.getElementById("password-strength");

    passwordStrengthDisplay.innerHTML = passwordStrength;

    // Change password strength display color based on strength level
    if (passwordStrength === "Very Strong") {
        passwordStrengthDisplay.style.color = "green";
    } else if (passwordStrength === "Strong") {
        passwordStrengthDisplay.style.color = "blue";
    } else if (passwordStrength === "Moderate") {
        passwordStrengthDisplay.style.color = "orange";
    } else if (passwordStrength === "Weak") {
        passwordStrengthDisplay.style.color = "red";
    } else {
        passwordStrengthDisplay.style.color = "gray";
    }
});

// Handle form submission
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate password confirmation
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Verify reCAPTCHA token
    grecaptcha.execute('6LcwUT4lAAAAAMb6jnZGHbfMzc2i8b2kS9kC70_0', {action: 'register'}).then(function(token) {
        console.log("i am robot")

        window.location.href = "index.hbs";
    });
});
