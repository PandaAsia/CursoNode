import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/user/:id-:name-:age", (req, res) => {
  //http://localhost:3000/user/19-jonmircha-39
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.send(
    `<h1> 
    ${req.params.name} Bienbendo a expres.js con el id es de ${req.params.id} y tienes de ${req.params.age} años
    </h1>`
  );
});

app.get("/search", (req, res) => {
  //http://localhost:3000/search?id=19&name=Jon&age=39
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.send(
    `<h1> 
    ${req.query.name} Bienbendo a expres.js con el id es de ${req.query.id} y tienes de ${req.query.age} años
    </h1>`
  );
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
