const express = require("express");
const { createList } = require("../controllers/listsController");

const router = express.Router();

router.post("/", createList);

module.exports = router;
