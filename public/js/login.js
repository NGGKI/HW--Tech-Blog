document.getElementById("login").addEventListener("click", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username");
  const passwordnode = document.getElementById("password");

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("userId", data.user.id);
    document.location.replace("/dashboard.html");
  } else {
    alert("Failed to login");
  }
});

