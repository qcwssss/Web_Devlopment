//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

require('dotenv').config(); // hide info

// global variable
let items = ["Buy Food", "Eat Food", "Cook Food"];

app.get("/", function(req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
  const todo_next = req.body.newItem;
  items.push(todo_next);

  // console.log(todo_next);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
