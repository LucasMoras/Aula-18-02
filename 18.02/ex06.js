const readline = require("readline"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva um número ", (num) => {
  
const ante = parseInt(num) - 1;

console.log(ante);

const suc = parseInt(num) + 1;

console.log(suc);

  rl.close();
});