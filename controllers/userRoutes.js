const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

// create login
router.post(
  "/users/login",
  async ({ body: { username, password, logedin } }, res) => {
    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        res.status(404).json({ message: "Invalid Username or Password." });
        return;
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        res.status(400).json({ message: "Invalid Username or Password." });
        return;
      }

      res.status(200).json({
        id: user.id,
        username: user.username,
        message: "Successfuly logged in!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// create a username and password
router.post("/users/register", async (req, res) => {
  try {
    const data = req.body;
    data.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(data);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/users/logout", (req, res) => {
  if (req.body.logedin === false) {
    req.body.destroy(() => {
      res.status(400);
    });
  } else {
    res.status(500);
  }
});

module.exports = router;
