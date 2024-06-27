let resultado;
const prompt = require("prompt-sync")();
let numero = prompt("Digite um número");
let expoente = prompt("Digite o expoente");
for (let i = 0; i < expoente; i++) {
  resultado = numero ** expoente;
}
console.log(resultado);
