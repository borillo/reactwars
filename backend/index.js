import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ strict: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the ReactWars API!! ;)");
});

app.get("/api/films", (req, res) => {
  res.json([
    {
      title: "Uno",
      episode: 1
    },
    {
      title: "Dos",
      episode: 2
    },
    {
      title: "Tres",
      episode: 3
    }
  ]);
});

app.listen(4000, () => console.log("Listening on port 4000!!"));
