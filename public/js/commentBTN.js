// logic adds a comment to the comment table

const postBTN = document.querySelector('#postBTN');

    postBTN.addEventListener('click', function(event) {
        event.preventDefault();

        console.log(document.getElementById('commentBlock'));
        const description = document.getElementById('commentDescription').value
        const blog_id = document.getElementById('commentBlock').dataset.blogid
        username = 'test'
    
        console.log(description);
        console.log(blog_id);
        const response =  fetch('/api/comment', {
            method: "POST",
            body: JSON.stringify({
                description,
                username,
                blog_id,
            }),
            headers: {
                'Content-Type': 'application/json',
              },
        });
        console.log(response);
    
        document.location.replace('/');
});

