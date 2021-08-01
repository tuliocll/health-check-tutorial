const express = require("express");

const posts = require("../utils/allPosts.json");

const router = express.Router();

router.get("/", (_, res) => {
  res.send(posts.posts);
});

module.exports = router;
