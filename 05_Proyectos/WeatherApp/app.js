import axios from "axios";
import chalk from "chalk";

const API_KEY = "6c062cad82a12de2f1cc25e32321347d";

function displayWeather(city, weatherData) {
  console.log(chalk.yellow.bold(`\n Información del clima: ${city}`));
  console.log(chalk.yellow("♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥"));
  console.log(chalk.cyan("descricion"), weatherData.weather[0].description);
  console.log(chalk.cyan("Temperatura"), `${weatherData.main.temp}°C`);
  console.log(chalk.cyan("humedad:"), `${weatherData.main.humidity}%`);
  console.log(
    chalk.cyan("Velocidad del viento: "),
    `${weatherData.wind.speed} m/s`
  );
  console.log(chalk.yellow("♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥"));
}

function handleError(error) {
  console.log(chalk.red.bold("Error: "), error.message);
  process.exit(1);
}

async function getWeather(city) {
  try {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await axios.get(endpoint, {
      params: {
        q: city,
        applid: API_KEY,
        units: "metric",
      },
    });
    //console.log(response);
    return response.data;
  } catch (error) {
    console.log(chalk.red(error));
    throw new Error(
      `No es Posible obtener la informacion de la ciudad ${city}`
    );
  }
}

function getData() {
  let city = process.argv[2];
  if (!city) {
    console.log(
      chalk.red.bold("Por favor, proporciona un nombre de lugar o cuidad")
    );
    console.log(
      chalk.red.bold(
        "Ejecuta la instruccion de la siguiente forma: node app.js [nombre cuidad]"
      )
    );
  }
  getWeather(city)
    .then((weatherData) => displayWeather(city, weatherData))
    .catch(handleError);
}

getData();
