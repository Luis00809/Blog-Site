// logic adds a comment to the comment table
const addCommentBTN = document.querySelectorAll('.addCommentBTN');

    addCommentBTN.forEach(postBTN => {
        postBTN.addEventListener('click', function(event) {
                event.preventDefault();
        
                const description = postBTN.closest('.dropdown').querySelector('#commentDescription').value
                const blog_id = postBTN.closest('.dropdown').querySelector('#commentBlock').dataset.blogid
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
});

