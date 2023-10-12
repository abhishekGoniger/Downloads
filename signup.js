
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const switchToLogin = document.querySelector('.switch a[href="#login-form"]');
const switchToSignup = document.querySelector('.switch a[href="#signup-form"]');

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});

switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});





