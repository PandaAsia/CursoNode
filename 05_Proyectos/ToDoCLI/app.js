import { createInterface } from "readline";
import { displayMenu } from "./displayMenu.js";
import { addTask } from "./addTasks.js";
import { listTask } from "./listTask.js";
import { completeTask } from "./completeTask.js";
import { deleteTask } from "./deleteTask.js";
import chalk from "chalk";

const taks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function chooseOptions() {
  rl.question("EDigita el número de tu opcion", (choice) => {
    switch (choice) {
      case "1":
        addTask(rl, taks, displayMenu, chooseOptions);
        break;
      case "2":
        listTask(taks, displayMenu, chooseOptions);
        break;
      case "3":
        completeTask(rl, taks, displayMenu, chooseOptions);
        break;
      case "4":
        deleteTask(rl, taks, displayMenu, chooseOptions);
        break;
      case "5":
        console.log(chalk.yellow("Adios!!!"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Optcion invalida, Intente nuevamente \n"));
        displayMenu();
        chooseOptions();
        break;
    }
  });
}

displayMenu();
chooseOptions();
