import chalk from "chalk";

function displayMenu() {
  console.log("\n");
  console.log(chalk.yellow.bold("♠♠♠♠♠♠♠♠♠ To Do App ♠♠♠♠♠♠♠♠♠"));
  console.log(chalk.blueBright("Menu de Opciones"));
  console.log("1. Agregar Tarea");
  console.log("2. Listar Tareas");
  console.log("3. Completar Tarea");
  console.log("4. Eliminar Tarea");
  console.log("5. Salir");
  console.log("\n");
}
export { displayMenu };
