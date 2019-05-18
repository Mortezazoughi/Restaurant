var express = require("express");
var path = require("path");

var app = express();
var PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var reservations = {};

app.post("/api/reservations", function(req, res) {

    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });
  


$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
      name: $("#name").val().trim(),
      phoneNumber: $("#phoneNumber").val().trim(),
      email: $("#email").val().trim(),
      uniqueId: $("#uniqueId").val().trim()
    };

    $.post("/api/reservations", newReservation)
      .then(function(data) {
        console.log("add.html", data);
        alert("Adding your reservation...");
      });
  });

