// const express = require("express");
// const { sendMessage } = require("../controllers/contactController");
// const router = express.Router();

// // Route for sending contact message
// router.post("/", sendMessage);

// module.exports = router;

const express = require("express");
const { sendMessage } = require("../controllers/contactControllers");
const router = express.Router();

router.post("/send", sendMessage);

module.exports = router;
