import chalk from "chalk";
function addTask(rl, taks, displayMenu, chooseOptions) {
  rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
    taks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con exito"));
    displayMenu();
    chooseOptions();
    console.log(taks);
  });
}
export { addTask };
