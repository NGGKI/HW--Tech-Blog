//getting bd from workbench

const Posts = {
  async getAll() {
    const res = await fetch("/api/posts");
    return res.json();
  },
  async create(data) {
    const res = await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}


//getting all db
Posts.getAll()
  .then((posts) => {
    let textHtml = ""
    posts.forEach(post => {
      textHtml += `<hr>
        <h3>Title: ${post.title}</h3>
        <p>Description: ${post.body}</p>
        <hr>`
    });
    document.getElementById('posts').innerHTML = textHtml
  })
  .catch((err) => console.log(err));

