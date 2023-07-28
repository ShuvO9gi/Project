//external imports
const express = require("express");

//internal imports
const { getInbox } = require("../controller/inboxController");
const decoratedHTMLResponse = require("../middleware/common/decoratedHTMLResponse");
const { checkLogin } = require("../middleware/common/checkLogin");

const router = express.Router();

//inbox page
router.get("/", decoratedHTMLResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
