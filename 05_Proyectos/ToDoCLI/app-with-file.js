import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";
import chalk from "chalk";
import { Console } from "console";

const taks = [];
const DB_FILE = "tasks.txt";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

function loadTasks() {
  try {
    const data = readFileSync(DB_FILE, "utf-8");
    const lines = data.split("\n");
    taks.length = 0;

    lines.forEach((line) => {
      if (line.trim() !== "") {
        const [task, completed] = line.split("|");
        taks.push({ task, completed: completed === true });
      }
    });
    console.log(chalk.green.bold("las tareas se han cargado en la BD"));
  } catch (error) {
    console.log(chalk.red.bold("No hay tareas por hacer ♥♥♥♥"));
  }
}

function saveTask() {
  const data = taks.map((task) => `${task.task}|${task.completed}`).join("\n");
  writeFileSync(DB_FILE, data, "utf-8");
  console.log(chalk.green.bold("Tarea agregada a la BD con exito\n"));
}

function addTask() {
  rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
    taks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con exito"));

    saveTask();
    displayMenu();
    chooseOptions();
  });
}

function listTask() {
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

function completeTask() {
  rl.question(
    chalk.bgMagentaBright("Digita el numero de la tarea a completar: "),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < taks.length) {
        taks[index].completed = true;
        saveTask();
        console.log(chalk.green.bold("Tarea marcada con exito\n"));
      } else {
        console.log(chalk.red.bold("Numero de Tarea invalido\n"));
      }
      displayMenu();
      chooseOptions();
    }
  );
}

function deleteTask() {
  rl.question(
    chalk.bgMagentaBright("Digita el numero de la tarea a Eliminar: "),
    (numbertask) => {
      const index = parseInt(numbertask) - 1;
      if (index >= 0 && index < taks.length) {
        taks.splice(index, 1);
        saveTask();
        console.log(chalk.green.bold("Tarea eliminado exitoso\n"));
      } else {
        console.log(chalk.red.bold("Numero de Tarea invalido\n"));
      }
      displayMenu();
      chooseOptions();
    }
  );
}

function chooseOptions() {
  rl.question("EDigita el número de tu opcion", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        deleteTask();
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

loadTasks();
displayMenu();
chooseOptions();
