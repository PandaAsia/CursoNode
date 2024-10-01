const fs = require("fs");

//leer un rachivo
// fs.readFile("inde.html", "utf-8", (err, contenido) => {
//   if (err) {
//     //console.log(err);
//     throw err;
//   } else {
//     console.log(contenido);
//   }
// });

//cambiar nombre del contenido
// fs.rename("index.html", "main.html", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Nombre cambiado Exitosamente");
// });

//agregar al ultimo un elemento
// fs.appendFile("index.html", "<p>hANA</p>", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Elemento agregado correctamente");
// });

//modificar un elemento
// fs.writeFile("index.html", "contenido Nuveo", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("contenido reemplazado exitosamente");
// });

//eliminar archivos
fs.unlinkSync("index.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("archivos eliminado");
});
//si ejecutas todos a la vez algunos metodo ejecuta mas rapitdo que otro si quiere que esten en orden utiliza
//Sync al final del comando
