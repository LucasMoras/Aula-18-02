const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a base: ", (base) => {
rl.question("Digite a altura: ", (alt) => {

const area = parseInt(base) * parseInt(alt);
const tinta = parseInt(area) * 0.5;
 console.log(tinta + "L");
  rl.close(); 
 });
});