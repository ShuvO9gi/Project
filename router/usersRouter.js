//external imports
const express = require("express");

//internal imports
const { getUsers, removeUser } = require("../controller/usersController");
const decoratedHTMLResponse = require("../middleware/common/decoratedHTMLResponse");
const avatarUpload = require("../middleware/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middleware/users/userValidators");
const { addUser } = require("../controller/usersController");

const router = express.Router();

//users page
router.get("/", decoratedHTMLResponse("Users"), getUsers);

//add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

//remove user
router.delete("/:id", removeUser);

module.exports = router;
