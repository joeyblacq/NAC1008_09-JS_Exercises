// Exercise 1.9.5

// Step 1: Declare a variable 'isActiveSession' with the value 'false'.
// Write your code below
const isActiveSession = false;

// Step 2: Declare a variable 'accountLevel' with the value 'admin'.
// Write your code below
const accountLevel = 'admin';

// Declare a variable 'hasResourceAccess' and use a logical AND operator '&&' to
// determine if the user can access the resource, using short-circuit evaluation.
    // Hint: 'x' and 'y' === 'string'.
// Write your code below

let x; 
let y;   


let hasResourceAccess = (typeof x === 'string') && (typeof y === 'string');

console.log(hasResourceAccess);
// Expected Output: false


// If you change the value of 'isActiveSession' to 'true'.
// Expected Output: true




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 01_BasicsJS/09_Logical_Operators/05_Short-Circuit_Evaluation.js 