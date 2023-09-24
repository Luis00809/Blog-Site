const updateButtons = document.querySelectorAll('.updateBTN');
const createBlog = document.querySelector('#postBTN');
const deleteBlog = document.querySelectorAll('.deleteBTN')

//  update a blog
updateButtons.forEach(button => {

    button.addEventListener('click', async function(event) {
        event.preventDefault();

        const title = button.closest('.dropdown-menu').querySelector('#title').value;
        const description = button.closest('.dropdown-menu').querySelector('#commentDescription').value;
        const id = button.closest('.dropdown-menu').querySelector('#forBlogId').dataset.blogid;
        const user_Name = "fake user";
        const date = "3/4/23";
    
        try {
            const response = await fetch(`/api/blog/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    description,
                    user_Name,
                    title,
                    date
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);

            if (!response.ok) {
                throw new Error('Failed to update blog');
            }
    
            console.log('Blog updated successfully');
            
        } catch (error) {
            console.error(error);
        }
        document.location.replace('/user')
    });
});

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
});

// delete a blog
deleteBlog.forEach(button => {
    button.addEventListener('click', async function(event) {
        event.preventDefault();

        const id = event.target.parentElement.dataset.blogid;
        try {
            const response = await fetch(`/api/blog/${id}`, {
                method: "DELETE",

                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        console.log('deleted blog id ' + id)
        document.location.replace('/user')

    });
})