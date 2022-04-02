const form = document.getElementById("dashboard");

//adding posts
document.getElementById("addform").addEventListener("click", async (event) => {
  const newTitle = document.getElementById("title").value;
  const newContent = document.getElementById("description").value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      body: newContent,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Check below");
    form.reset();
  } else {
    alert("Try again");
  }
});

//logout
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/index.html");
  } else {
    alert("Failed to log out.");
  }
};

document.getElementById("logout").addEventListener("click", logout);

//getting bd from workbench
