const router = require("express").Router();
const { Comment } = require("../models");

router.get("/comments", async (req, res) => {
  const comments = await Comment.findAll({});
  res.json(comments);
});

router.post("/comments", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).json(comment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again.", error: err });
  }
});

module.exports = router;
