const express = require("express");
const app = express();

app.get("/forgetpass", (req, res) => {
  res.render("forgetpass"); // assumes "forgetpass.hbs" is in your views directory
});

// rest of your server code here


const forgetPasswordLink = document.getElementById("forget-password-link");

forgetPasswordLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "forgetpass.hbs";
});
