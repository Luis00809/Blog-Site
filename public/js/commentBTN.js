// logic adds a comment to the comment table

const form = document.querySelector('.dropdown-menu');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.querySelector('#commentDescription').value;
    username = 'test'

    const response =  fetch('/api/comment/', {
        method: "POST",
        body: JSON.stringify({
            description,
            username,
            // might need to add a username option or delete it from the model
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    });
    console.log(response);

    document.location.replace('/');
    // if (response.ok) {
    //     // document.location.replace('/');
    //     console.log("comment created")
    // } else {
    //     alert("Didn't add a comment!");
    // };
});

// async function addingAComment(event) {
//     event.preventDefault();
//     const commentBTN = document.querySelector('#commentBTN');
//     const description = document.querySelector('#commentDescription').value;
//     const postBTN = document.querySelector('#postBTN');
    
//     const response = await fetch('/api/comment/', {
//         method: "POST",
//         body: JSON.stringify({
//             description,
//             // might need to add a username option or delete it from the model
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//           },
//     });
//     console.log(response);
    // if (response.ok) {
    //     document.location.replace('/');
    // } else {
    //     alert("Didn't add a comment!");
    // };
// };

// postBTN?.addEventListener('click', addingAComment);
