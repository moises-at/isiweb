// script.js

// Mostrar/Ocultar contraseña
const passwordInput = document.getElementById('password');
const togglePassword = document.createElement('button');
togglePassword.textContent = 'Mostrar';
togglePassword.type = 'button';
togglePassword.className = 'toggle-password';

passwordInput.parentNode.appendChild(togglePassword);

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});
