//external imports
const express = require("express");

//internal imports
const { getLogin, login, logout } = require("../controller/loginController");
const decoratedHTMLResponse = require("../middleware/common/decoratedHTMLResponse");
const {
  doLoginValidator,
  doLoginValidationHandler,
} = require("../middleware/login/loginValidators");
const { redirectLoggedIn } = require("../middleware/common/checkLogin");

const router = express.Router();

//set page title
const page_title = "Login";

//login page
router.get("/", decoratedHTMLResponse("Login"), redirectLoggedIn, getLogin);

//process login
router.post(
  "/",
  decoratedHTMLResponse(page_title),
  doLoginValidator,
  doLoginValidationHandler,
  login
);

//logout
router.delete("/", logout);

module.exports = router;
