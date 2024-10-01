import chalk from "chalk";
function completeTask(rl, taks, displayMenu, chooseOptions) {
  rl.question(
    chalk.bgMagentaBright("Digita el numero de la tarea a completar: "),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < taks.length) {
        taks[index].completed = true;
        console.log(chalk.green.bold("Tarea marcada con exito\n"));
      } else {
        console.log(chalk.red.bold("Numero de Tarea invalido\n"));
      }
      displayMenu();
      chooseOptions();
    }
  );
}
export { completeTask };
