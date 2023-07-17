//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports
const {
  notFoundhandler,
  errorHandler,
} = require("./middleware/common/errorhandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config();

//database connection
mongoose
  .connect(
    process.env.MONGO_CONNECTION_STRING /* , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} */
  )
  .then(() => console.log("Database connection is successful!"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //html form parser(reader)//extended: true helps query parser

//set engine
app.set("view engine", "ejs");

//set static folder(client can access this static folder(file stored in the public folder))
app.use(express.static(path.join(__dirname, "public")));

//parse cookies(signed cookies)
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//404 not found handler
app.use(notFoundhandler);

//common  error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app is listenning to port ${process.env.PORT}`);
});
