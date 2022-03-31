document.getElementById('logout').addEventListener('click,' async (event) => {
  event.preventDefault()

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/index.html');
  } else {
    alert('Failed to log out');
  }
})