//external imports
const express = require("express");

//internal imports
const { getInbox } = require("../controller/inboxController");
const decoratedHTMLResponse = require("../middleware/common/decoratedHTMLResponse");

const router = express.Router();

//inbox page
router.get("/", decoratedHTMLResponse("Inbox"), getInbox);

module.exports = router;
