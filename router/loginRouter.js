//external imports
const express = require("express");

//internal imports
const { getLogin } = require("../controller/loginController");
const decoratedHTMLResponse = require("../middleware/common/decoratedHTMLResponse");
const avatarUpload = require("../middleware/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middleware/users/userValidators");
const { addUser } = require("../controller/usersController");

const router = express.Router();

//users page
router.get("/", decoratedHTMLResponse("Login"), getLogin);

//add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

module.exports = router;
