const express = require("express");
const router = express.Router();

const appController = require("../controller/appController");

router.post("/webhook-data", appController.post);

module.exports = router;
