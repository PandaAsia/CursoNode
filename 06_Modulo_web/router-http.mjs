import { createServer } from "http";

const server = createServer((req, resp) => {
  if (req.url === "/") {
    resp.writeHead(200, { "Content-Type": "text/html: charset=utf-8" });
    resp.end("Home");
  } else if (req.url === "/hola") {
    resp.writeHead(200, { "Content-Type": "text/html: charset=utf-8" });
    resp.end("Hola");
  } else if (req.url === "/kenai") {
    resp.writeHead(200, { "Content-Type": "text/html: charset=utf-8" });
    resp.end("Kenai");
  } else {
    resp.writeHead(404, { "Content-Type": "text/html: charset=utf-8" });
    resp.end("Not Fount");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("servidor web en ejecucion en http://127.0.0.1:3000");
});
