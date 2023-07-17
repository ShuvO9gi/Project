//external imports
const express = require("express");

//internal imports
const { getUsers } = require("../controller/usersController");
const decoratedHTMLResponse = require("../middleware/common/decoratedHTMLResponse");

const router = express.Router();

//users page
router.get("/", decoratedHTMLResponse("Users"), getUsers);

module.exports = router;
