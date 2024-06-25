// Exercise 2.14.2

// Step 1: Declare a 'let 'variable 'number' with the function value: 'Math.floor(Math.random() * 3) + 1'.
// Write your code below
let number = Math.floor(Math.random() * 3) + 1

// Step 2: Use a switch statement to log different messages based on the numeric value.
  // if it's 1, console.log(`The number is one.`)
  // if it's 2, console.log(`The number is two.`)
  // if it's 3, console.log(`The number is three.`)
// Write your code below
switch (number) {
  case 'num1':
    console.log(`The number is one.`)
    break;
  case 'num2':
    console.log(`The number is two.`)
    break;
  case 'num3':
    console.log(`The number is three.`)
    break;
  default:
    console.log("Invalid number.");
}



// example of Expected Output: The number is one.




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 02_ControlFlow/14_Switch_Statements/02_Switch_Statement_with_Numeric_Values.js