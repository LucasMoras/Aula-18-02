const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu salario ", (salario) => {
  
    const conv = parseFloat(salario)/5.6;

    console.log(conv);

  rl.close(); 
});