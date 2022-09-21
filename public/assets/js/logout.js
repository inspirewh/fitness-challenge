const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
  
    if (response.ok) {
        // If successful, redirect the browser to the login page
      document.location.replace('/signup');
    } else {
        alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout-btn').addEventListener('click', logout);
  