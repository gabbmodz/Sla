function handleSuccessfulLogin() {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('password', passwordInput.value);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    displayWelcomeContent();
    document.body.classList.add('logged-in'); // Adicione esta linha
}

const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePasswordButton.textContent = type === 'password' ? 'ver senha ' : 'ocultar senha'; // Altera o ícone
});
