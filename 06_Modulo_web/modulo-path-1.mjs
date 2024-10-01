import { join } from "path";

const directorio = "/ruta/principal";
const archivo = "archivo.txt";

const rutaCompletada = join(directorio, archivo);
console.log("Ruta Completada: ", rutaCompletada);
