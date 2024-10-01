import express from "express";
import { resolve } from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.send("<h1>Hola mundo desde Exprees.js con el metodo send</h1>");
});

app.get("/json", (req, res) => {
  res.json({
    name: "shana",
    age: 15,
    hero: "black cat",
  });
});

app.get("/archivo", (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.get("/plantilla", (req, res) => {
  res.render("plantilla");
});

app.get("/plantilla", (req, res) => {
  //No funciona esta ruta porque hay que especificar el motor de plantillas a express.js 
  res.render("plantilla");
});

app.get("/Jerru", (req, res) => {
  res.redirect(301, "https://pandaasia.github.io/AnimeFolder/");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
