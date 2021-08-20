const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, Word!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: claramagaldi@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("My name is Clara Magaldi.");
})

app.get("/hobbies", function(req, res) {
  res.send("Browse for gadgets at Amazon.");
})

//app.listen(3000);
app.listen(3000, function() {
  console.log("Server has started on port 3000.")
});
