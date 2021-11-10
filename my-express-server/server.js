const express = require("express");

const app = express();

app.get("/", function(req, res) {
  //console.log(request);
  res.send("<h1>Hello, World</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at : chen@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("This web is create by Chen, a web developer");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Hiking</li><li>Baking</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
