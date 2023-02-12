const { discussionsController } = require("../controller");
const { findAll, findById, addDiscussion } = discussionsController;
const express = require("express");
const router = express.Router();

// /discussions
router.get("/", findAll);
router.post("/", addDiscussion);

// /discussions/:id
router.get("/:id", findById);

module.exports = router;
