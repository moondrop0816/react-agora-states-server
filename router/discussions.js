const { discussionsController } = require("../controller");
const { findAll, findById } = discussionsController;
const express = require("express");
const router = express.Router();

// /discussions
router.get("/", findAll);

// /discussions/:id
router.get("/:id", findById);

module.exports = router;
