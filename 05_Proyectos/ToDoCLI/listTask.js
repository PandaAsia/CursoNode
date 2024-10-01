import chalk from "chalk";

function listTask(taks, displayMenu, chooseOptions) {
  console.log(chalk.yellow.bold("\n♠♠♠♠♠♠♠♠♠ Tareas ♠♠♠♠♠♠♠♠♠\n"));
  if (taks.length === 0) {
    console.log(chalk.redBright("No hay tareas por hacer ♥♥♥♥"));
  } else {
    taks.forEach((task, index) => {
      let status = task.completed ? "♥" : "X";
      if (task.completed) {
        console.log(
          chalk.greenBright(`${index + 1}. ${status} - ${task.task}`)
        );
      } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
      }
    });
  }

  displayMenu();
  chooseOptions();
}

export { listTask };
