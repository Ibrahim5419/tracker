const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const port = process.env.port;

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
