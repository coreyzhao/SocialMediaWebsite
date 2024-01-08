// LOGIN POP UP

const loginButtonElement = document.querySelector('.js-login-button');

loginButtonElement.addEventListener('click', () => {
    document.querySelector('.js-login-screen').style.display = 'block';
});

const xLoginButtonElement = document.querySelector('.x-login-icon');

xLoginButtonElement.addEventListener('click', () => {
    document.querySelector('.js-login-screen').style.display = 'none';
});

const createAccountButtonElement = document.querySelector('.js-create-account-button');

createAccountButtonElement.addEventListener('click', () => {
    document.querySelector('.js-login-screen').style.display = 'none';
    document.querySelector('.js-signup-screen').style.display = 'block';
});

const xSignupButtonElement = document.querySelector('.x-sign-up-icon');

xSignupButtonElement.addEventListener('click', () => {
    document.querySelector('.js-signup-screen').style.display = 'none';
});




// SIGN UP STORAGE




accountsArray = JSON.parse(localStorage.getItem('accounts')) || []

const currentAccount = JSON.parse(localStorage.getItem('currentAccount')) || ''

if (currentAccount === '') {
    document.querySelector('.js-login-button').innerHTML = 'LOGIN'
} else {
    document.querySelector('.js-login-button').innerHTML = ((JSON.parse(localStorage.getItem('currentAccount'))).username).toUpperCase();
}

const signupButtonElement = document.querySelector('.signup-button');
signupButtonElement.addEventListener('click', () => {
    const inputUsername = document.querySelector('.js-input-username');
    const username = inputUsername.value

    const inputEmail = document.querySelector('.js-input-email');
    const email = inputEmail.value

    const inputPassword = document.querySelector('.js-input-password');
    const password = inputPassword.value

    tempAccount = {
        username: username,
        email: email,
        password: password
    }

    if (username === '' || email === '' || password === '') {
        console.log()
    }

    if (accountsArray.includes(tempAccount)) {
        console.log('account already exists');
    } else {
        accountsArray.push(tempAccount);
        localStorage.setItem("accounts",JSON.stringify(accountsArray));

        localStorage.setItem("currentAccount",JSON.stringify(tempAccount));

        document.querySelector('.js-login-button').innerHTML = username.toUpperCase();
        document.querySelector('.js-signup-screen').style.display = 'none';

    }

});

const signinButtonElement = document.querySelector('.signin-button');
signinButtonElement.addEventListener('click', () => {

    const inputEmail = document.querySelector('.input-email');
    const email = inputEmail.value

    const inputPassword = document.querySelector('.input-password');
    const password = inputPassword.value

    tempAccount = {
        email: email,
        password: password
    }


});