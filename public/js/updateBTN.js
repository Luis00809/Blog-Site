const form = document.querySelector('.dropdown-menu');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#commentDescription').value;
    username = "fake user";

    const response = fetch('/api/comment/:id', {
        method: "PUT",
        body: JSON.stringify({
            description,
            username,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });


})