const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6b8c6d85a30bf07e604b420c93afbc25&units=metric";
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      var weatherData = JSON.parse(data);
      console.log(weatherData);

      const ramen = {
        name: "Angela",
        favorite:"Ramen"
      }
      console.log(JSON.stringify(ramen));
    })
  })
  res.send("Server is up and running");
});

app.listen(3000, function(req, res) {
  console.log("Server is running on port 3000");

});
