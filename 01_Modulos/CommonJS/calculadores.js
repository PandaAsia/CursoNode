const sumar = (a, b) => a + b,
  restar = (a, b) => a - b,
  multiplicar = (a, b) => a * b,
  dividir = (a, b) => a / b,
  modulo = (a, b) => a % b,
  calculadores = {
    sumar,
    restar,
    multiplicar,
    dividir,
    modulo,
  };

module.exports = calculadores;

function saludar(nombre) {
  return `hola ${nombre}`;
}

function saludarHolamundo() {
  return "Hola Mundo";
}
// module.exports.saludar = saludar;
// module.exports.saludarHolamundo = saludarHolamundo;

module.exports = {
  saludar,
  saludarHolamundo,
};
