const express = require("express");

const { body } = require("express-validator");

const postsController = require("../controllers/posts");

const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, postsController.fetchAll);

router.post(
  "/",
  [
    auth,
    body("title").trim().isLength({ min: 1 }).not().isEmpty(),
    body("body").trim().isLength({ min: 1 }).not().isEmpty(),
    body("link").trim(),
    body("user").trim().not().isEmpty(),
  ],
  postsController.postPost
);

router.delete("/:id", auth, postsController.deletePost);

module.exports = router;

