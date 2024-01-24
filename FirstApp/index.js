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

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Welcome to the ${subreddit} subreddit!`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(`<h1>Viewing post ${postID} in the ${subreddit} subreddit.</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats");
});

app.get("/kitties", (req, res) => {
  res.send("MEOW!!! Yes!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched?");
  }
  res.send(`You searched for "${q}"`);
});

app.get("*", (req, res) => {
  res.send("I DON'T KNOW WHAT THAT IS.");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
