const form = document.getElementById("dashboard");

document.getElementById("addform").addEventListener("click", async (event) => {
  event.preventDefault();

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
    alert("Check out at home to see your post");
    form.reset();
  } else {
    alert("not OKE");
  }
});
