const signUpHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();

    if (username && password && email) {
        const response = await fetch ('/api/user/signUp', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else { 
            alert('failed to sign up!');
        }
    }
};

document.querySelector('#signUpBTN').addEventListener('submit', signUpHandler);