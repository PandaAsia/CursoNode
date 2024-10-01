import { createServer } from "http";

const server = createServer((req, resp) => {
  //resp.writeHead(200, { "Content-Type": "text/plain" });
  // Configurar el encabezado de la respuesta
  resp.writeHead(200, { "Content-Type": "text/html: charset=utf-8" });
  // Enviar una respuesta al cliente
  resp.end("Hola mundo");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("servidor web en ejecucion en http://127.0.0.1:3000");
});
