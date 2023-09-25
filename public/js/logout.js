const logoutBTN = document.querySelector('#logout');

logoutBTN.addEventListener('click', async function(event) {
    const response = await fetch('/api/user/logout', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log out.');
      };
      
})