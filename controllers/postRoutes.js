const router = require("express").Router();
const { Post } = require("../models");


//get all posts
router.get('/posts', async (req, res) => {
  const posts = await Post.findAll({})
  res.json(posts)
})

// create a post
router.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    
    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again.", error: err });
  }
});

// udpate and delete

router.put("/posts/:id", async ({ body, params: { id } }, res) => {
  try {
    let post = await Post.findOne({ where: { id } });
    if (!post) {
      res.status(404).json({ message: "No user with this id." });
      return;
    }
    await Post.update({ ...body }, { where: { id } });
    res.status(200).json({ message: "Successfuly updated!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again.", error: err });
  }
});

router.delete("/posts/:id", async ({ body, params: { id } }, res) => {
  try {
    let post = await Post.findOne({ where: { id } });
    if (!post) {
      res.status(404).json({ message: "No user with this id." });
      return;
    }
    await Post.destroy({ where: { id } });
    res.status(200).json({ message: "Catergory deleted!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again.", error: err });
  }
});

module.exports = router;
