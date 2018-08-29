import express from "express";
import bodyParser from "body-parser";

import db from "./database/db";

const app = express();

app.use(bodyParser.json({ strict: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the ReactWars API!! ;)");
});

app.get("/api/films", (req, res) => {
  res.json(db.films);
});

app.get("/api/teachers", (req, res) => {
  res.json(["Ricardo Borillo", "Jaime Perera"]);
});

app.listen(4000, () => console.log("Listening on port 4000!!"));
