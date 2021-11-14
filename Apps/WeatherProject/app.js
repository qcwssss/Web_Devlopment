const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  const query = req.body.cityName;
  const apiKey = "0b36f3c8a84b21ae28446442f860be8d";
  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+ apiKey +"&units=" + unit;
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      var weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon_url = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png" ;

      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<h1>The weather in London is " + temp + " degrees Celcius.</h1>");
      res.write("<img src="+ icon_url +">");

      res.send();

    });
  })
})




app.listen(3000, function(req, res) {
  console.log("Server is running on port 3000");

});
