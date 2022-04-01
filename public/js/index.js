const form = document.getElementById("dashboard");

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
    alert("Check out at home to see your post");
    form.reset();
  } else {
    alert("not OKE");
  }
});

//logout
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

document.getElementById("logout").addEventListener("click", logout);

//getting bd from workbench
const Posts = {
  async getAll() {
    const res = await fetch("/api/posts");
    return res.json();
  },
};

//getting all db
Posts.getAll()
  .then((posts) => {
    let textHtml = "";
    posts.forEach((post) => {
      textHtml += `<hr>
        <h3>Title: ${post.title}</h3>
        <p>Description: ${post.body}</p>
        
        <hr>`;
    });
    document.getElementById("posts").innerHTML = textHtml;
  })
  .catch((err) => console.log(err));
