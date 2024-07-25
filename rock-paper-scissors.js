// Step 2: Write the logic to get the computer choice
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
//      Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. 
//      Think about how you can use this to conditionally return one of the multiple choices.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

function getComputerChoice() {
    // Allow for three options (0, 1, 2)
    let i = Math.floor(Math.random() * 3);

    // Default to "rock"
    let choice = "rock";

    // Check to see if choice string needs to change
    if (i == 1) { choice = "paper"; }
    else if (i == 2) { choice = "scissors"; }

    return choice;
}