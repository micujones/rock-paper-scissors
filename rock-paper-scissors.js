// Step 2: Write the logic to get the computer choice
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
//      Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. 
//      Think about how you can use this to conditionally return one of the multiple choices.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

function getComputerChoice() {
    let i = Math.random() * 3;

    console.log(i);

    let choice = "rock";
    if (i >= 33 && i < 67) { choice = "paper"; }
    else if (i >= 67) { choice = "scissors"; }
    console.log(choice);
}