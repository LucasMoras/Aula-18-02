const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (num1) => {

rl.question("Digite outro: ", (num2) => {

const soma = parseInt(num1) + parseInt(num2);

const média = parseInt(soma)/2;

console.log(média);

rl.close();
 });
});