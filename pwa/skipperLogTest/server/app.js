var express = require("express");
var app = express();
var port = 8080;

app.use(express.static("public"));

app.get("/calc-sum", function(req, res) {
    var sum = Number(req.query["summand1"]) + Number(req.query["summand2"]);
    res.send("Die Summe ist: " + sum); 
  });

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });
