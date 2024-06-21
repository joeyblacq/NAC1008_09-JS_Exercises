// Exercise 2.10.3
// console.log('Debug: Script is running');
// Step 1: Declare a variable 'score' with the function value: Math.random().
// Write your code below

const score = Math.random();

console.log(`The score is: ${score}`);


// Step 2: Use an if-else if-else statement to check the score and
  // console.log('Excellent') if the score is greater than or equal to 0.9
  // console.log('Good') if it is greater than or equal to 0.6
  // console.log('Needs Improvement') if it is less than 0.6
// Write your code below
if (score>=0.9) {
console.log('Excellent')
} else if (score>=0.6) {
console.log('Good');
} else {
console.log('Needs Improvement')
}



// Expected Output: Depending on the score.




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 02_ControlFlow/10_Conditional_Statements/03_if-else_if-else_Statement.js