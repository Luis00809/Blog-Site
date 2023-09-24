
const form = document.querySelector('#updateForm');
// const create = document.querySelector('#createBlog');

//  update a comment
form.addEventListener('click', function(event) {
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
});


const createBlog = document.querySelector('#postBTN');

// create a blog
createBlog.addEventListener('click', function(event) {
    event.preventDefault();

    const title = document.querySelector('#blogTitle').value;
    const description = document.querySelector('#createDescription').value;
    const date = document.querySelector('#date').value;

    user_Name = "fake User";

    const response = fetch('/api/blog/', {
        method: "POST",
        body: JSON.stringify({
            title,  
            description,
            user_Name,
            date,   
        }),
        headers: {
            'Content-Type': 'application/json',
        },

    });
    console.log(response);
    document.location.replace('/user')
})