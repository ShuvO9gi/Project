//external imports
const express = require("express");

//internal imports
const { getLogin } = require("../controller/loginController");
const decoratedHTMLResponse = require("../middleware/common/decoratedHTMLResponse");

const router = express.Router();

//login page
router.get("/", decoratedHTMLResponse("Login"), getLogin);

module.exports = router;
