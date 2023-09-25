const loginHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();

    console.log(email);
    console.log(password)
    console.log(username);
    if (email && password ) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert("Didn't sign in");
        }
    }
};

document.querySelector('#loginBTN').addEventListener('click', loginHandler);