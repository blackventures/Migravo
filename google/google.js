function solution(A) {
    // Your solution goes here.
    console.error('Tip: Use console.error() to write debug messages on the output tab.');
    return 0;
  }
  
  // Read from stdin, solve the problem, write answer to stdout.
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  rl.on('line', function(line) {
    const inputs = line.split(' ');
    const A = inputs[0].split(',').map(Number);
  
    process.stdout.write(solution(A).toString());
  });