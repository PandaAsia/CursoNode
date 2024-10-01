import express from "express";
import { resolve } from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
