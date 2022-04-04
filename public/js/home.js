const addComment = () => {};

const Post = {
  async getAll() {
    const res = await fetch("/api/posts");
    return res.json();
  },
};

const Comment = {
  async getAll() {
    const res = await fetch("/api/comments");
    return res.json();
  },
};

//getting all db
Post.getAll()
  .then((posts) => {
    let textHtml = "";
    posts.forEach((post) => {
      textHtml += `<hr>
        <h3>Title: ${post.title}</h3>
        <p>Description: ${post.body}</p>
        <p>Comment: ${posts[0].Comments[0].body}</p>
        <input id="comment" type="text">
        <button class=${post.id} id="addComment">Add Comment</button>
        <hr>`;
    });
    //getting all button work
    document.getElementById("posts").innerHTML = textHtml;
    document
      .getElementById("addComment")
      .addEventListener("click", async (event) => {
        const postId = event.target.className;
        const newComment = document.getElementById("comment").value;
        const response = await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({
            body: newComment,
            userId: localStorage.getItem("userId"),
            postId: postId,
          }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          alert("added");
        } else {
          alert("Try again");
        }
      });
  })
  .catch((err) => console.log(err));
