const { discussionsController } = require("../controller");
const { findAll, findById, addDiscussion, deleteDiscussion } =
  discussionsController;
const express = require("express");
const router = express.Router();

// /discussions
router.get("/", findAll);
router.post("/", addDiscussion);

// /discussions/:id
router.get("/:id", findById);
router.delete("/:id", deleteDiscussion);

module.exports = router;
