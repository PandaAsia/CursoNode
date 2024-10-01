import chalk from "chalk";
function deleteTask(rl, taks, displayMenu, chooseOptions) {
  rl.question(
    chalk.bgMagentaBright("Digita el numero de la tarea a Eliminar: "),
    (numbertask) => {
      const index = parseInt(numbertask) - 1;
      if (index >= 0 && index < taks.length) {
        taks.splice(index, 1);
        console.log(chalk.green.bold("Tarea eliminado exitoso\n"));
      } else {
        console.log(chalk.red.bold("Numero de Tarea invalido\n"));
      }
      displayMenu();
      chooseOptions();
    }
  );
}
export { deleteTask };
