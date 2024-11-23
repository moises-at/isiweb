// validations.js

// Selección del formulario y sus campos
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Validación del correo electrónico
function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón básico para correos
    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    return true;
}

// Validación de la contraseña
function validatePassword() {
    const password = passwordInput.value.trim();
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }
    return true;
}

// Validación general al enviar el formulario
form.addEventListener('submit', (event) => {
    if (!validateEmail() || !validatePassword()) {
        event.preventDefault(); // Evita el envío si las validaciones fallan
    }
});

// validations.js

// Validar contraseñas en el registro
function validatePasswordMatch() {
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }
    return true;
}

// Validación general del formulario de registro
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
        if (!validateEmail() || !validatePassword() || !validatePasswordMatch()) {
            event.preventDefault(); // Evita el envío si las validaciones fallan
        }
    });
}
