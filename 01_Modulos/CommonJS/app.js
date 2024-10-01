const calculadora = require("./calculadores.js");
c = console.log;

c(calculadora.sumar(2, 4));
c(calculadora.restar(2, 4));
c(calculadora.multiplicar(2, 4));
c(calculadora.dividir(4, 2));
c(calculadora.modulo(4, 2));

// const saludo = require("./calculadores.js");
// console.log(saludo.saludar("Hola mUNADO"));
const { saludar } = require("./calculadores.js");
console.log(saludar("Hola mUNADO"));
