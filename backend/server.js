// [] {}

const express = require("express");

// create instance of an Express.js app
const app = express();
const port = 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// set up routes for your server to handle HTTP requests
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send("products");
});

//set it up to listen on a specific port
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
