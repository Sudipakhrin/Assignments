const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
// Database connection
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sudeep:Sudiptamang1@cluster0.iyenujk.mongodb.net/assignmentACS?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// create the user model
const User = mongoose.model("User", userSchema);
app.use(bodyParser.urlencoded({ extended: false }));
// Set the view engine to use Handlebars
app.set("view engine", "hbs");
// Set the path to your views folder
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "static")));

// Define your routes
app.get("/", (req, res) => {
  res.render("index", { title: "Login Page" });
});
app.get("/register", (req, res) => {
  res.render("register", { title: "Register page" });
});
app.post("/register", async (req, res) => {
  console.log(req.body);
  const student = await User.create({ ...req.body });
  res.redirect("/");
});
app.get("/forgetpass", (req, res) => {
  res.render("forgetpass", { title: "Forget page" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
