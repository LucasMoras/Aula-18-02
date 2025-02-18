const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite os dias trabalhados: ", (dias) => {

const remu = parseInt(dias) * 200;

 console.log("Salario é de: " + remu);
  rl.close(); 
 });