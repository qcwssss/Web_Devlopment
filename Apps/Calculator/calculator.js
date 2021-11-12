const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The calculation result is " + result);
});

// Calculate BMI
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var bmi = w/n;
  res.send("Your BMI is " + bmi);
})


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
