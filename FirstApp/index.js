const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST.");
//   // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS THE RESPONSE!");
//   // res.send({ color: "red" });
//   // res.send("<h1>This is my webpage!</h1>");
// });

app.get("/", (req, res) => {
  res.send("This is the home page.");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

app.get("*", (req, res) => {
  res.send("I DON'T KNOW WHAT THAT IS.");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
