// Exercise 2.14.3

// Step 1: Declare a variable 'fruit' with the value 'apple'.
// Write your code below

let fruit = 'apple';




// Step 2: Use a switch statement to log different messages based on the fruit.
  // if it's a banana, console.log(`It's a banana.`)
  // if it's an apple or an orange, console.log(`It's an apple or an orange.`)
  // if it's any other fruit, console.log(`It's a different fruit.`)
// Write your code below

switch (fruit) {
  case 'banana':
    console.log(`It's a banana.`);
    break;
  case 'apple':
    case'orange':
    console.log(`It's an apple or an orange.`);
    break;
  default:
   console.log(`It's a different fruit.`);
}
// Expected Output: It's an apple or an orange.




// To see the result of the console.log(), use the command below in the terminal:
// node EXERCISES/02_ControlFlow/14_Switch_Statements/03_Switch_Statement_with_Multiple_Cases.js

// To run the test of this specific exercise, use the command below in the terminal:
// npm run test:2.14.3