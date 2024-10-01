import { format } from "url";

const url10ob = {
  protocol: "https",
  hostname: "www.ejemplo.com",
  pathname: "/ruta",
  query: { parametro1: "valor1", parametro2: "valor2" },
};

const urlString = format(url10ob);

console.log("URL completada", urlString);
