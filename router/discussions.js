const { discussionsController } = require("../controller");
const { findAll, findById, addDiscussion, deleteDiscussion, updateDiscussion } =
  discussionsController;
const express = require("express");
const router = express.Router();

// /discussions
router.get("/", findAll);
router.post("/", addDiscussion);

// /discussions/:id
router.get("/:id", findById);
router.delete("/:id", deleteDiscussion);
router.put("/:id", updateDiscussion);

module.exports = router;
