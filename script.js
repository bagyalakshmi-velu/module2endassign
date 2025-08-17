function validateSignupForm() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    let valid = true;

    // Reset error messages
    document.getElementById("fullnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("termsError").textContent = "";

    // Full name validation
    if (fullname.length < 3) {
        document.getElementById("fullnameError").textContent = "Full name must be at least 3 characters.";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
    }

    // Password match
    if (password !== confirmPassword) {
        document.getElementById("passwordError").textContent = "Passwords do not match.";
        valid = false;
    }

    // Terms check
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms.";
        valid = false;
    }

    // If valid
    if (valid) {
        alert("Sign up successful!");
        document.getElementById("signupForm").reset();
    }

    return false; 
}