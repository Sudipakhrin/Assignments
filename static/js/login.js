const express = require("express");
const app = express();

app.get("/forgetpass", (req, res) => {
  res.render("forgetpass"); 
});



const forgetPasswordLink = document.getElementById("forget-password-link");

forgetPasswordLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "forgetpass.hbs";
});
