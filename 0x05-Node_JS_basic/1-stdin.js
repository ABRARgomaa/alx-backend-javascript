/**
 * Create a program named 1-stdin.js that
 * will be executed through command line
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

process.on('exit', () => {
  console.log("This important software is now closing");
});
