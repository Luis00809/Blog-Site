const logoutBTN = document.querySelector('#logout');
const dashboardBTN  = document.querySelector('#dash');


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
});

const toDashboard = async (event) => {
  event.preventDefault();

  const data = await fetch('api/user/session');
  const sessionData = await data.json();

  // const response = await fetch (`/dashboard/user/${sessionData.userId}`, {
  //   method: "GET", 
  //   headers: {'Content-Type': 'application/json'}
  // });
  await document.location.replace(`/dashboard/user/${sessionData.userId}`);

  // if (response.ok) {
  //   document.location.replace(`/dashboard/user/${sessionData.userId}`);
  // }

};

dashboardBTN.addEventListener('click', toDashboard);