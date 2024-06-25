// Exercise 2.14.1

// Step 1: Declare a variable 'dayNumber' with the function value 'new Date().getDay()'.
// Write your code below
let dayNumber = new Date().getDay();

// Don't change the code declaration below
let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayNumber];
console.log(`Today it is ${dayName}`)


// Step 2: Use a switch statement on the value of 'dayNumber' to
  // console.log(`It's the start of the week`) if it is 'Mondday',
  // console.log(`It's the middle of the week`) if it is Tuesday,
  // console.log(`It's the middle of the week`) if it is Wednesday,
  // console.log(`It's the middle of the week`) if it is Thursday,
  // console.log(`It's almost the weekend`) if it is Friday,
  // console.log(`It's the weekend`) if it is Saturday,
  // console.log(`It's the weekend`) if it is Sunday,
  // and console.log(`Invalid day`) otherwise (default).
// Write your code below
switch (dayNumber) {
  case "Monday":
    console.log(`It's the start of the week`)
    break;
  case "Tuesday":
    console.log(`It's the middle of the week`)
    break;
  case "Wednesday":
    console.log(`It's the middle of the week`)
    break;
  case "Thursday":
    console.log(`It's the middle of the week`)
    break;
  case "Friday":
    console.log(`It's almost the weekend`)
    break;
  case "Saturday":
    console.log(`It's the weekend`)
    break;
  case "Sunday":
    console.log(`It's the weekend`)
    break;

    default:
    console.log("It's the middle of the week");
}



// exampple of Expected Output: It's the middle of the week.




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 02_ControlFlow/14_Switch_Statements/01_Basic_Switch_Statement.js