const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu nome: ", (nome) => {

rl.question("Digite seu salario: ", (salario) => {
    console.log("Olá "+ nome + " seu salario é de " + salario);

rl.close();
 });
});

