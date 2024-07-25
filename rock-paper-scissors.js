// Randomly returns one of the following string values: “rock”, “paper” or “scissors”
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

// Returns a valid choice depending on user input
function getHumanChoice() {

    let isValid = false;
    let response = prompt("Rock, paper, or scissors?");

    while (!isValid) {
        response = response.trim().toLowerCase();

        // Check for a valid response ("rock", "paper", or "scissors")
        if (response == "rock" || response == "paper" || response == "scissors") {
            isValid = true;
            console.log(response)
            return response;
        }

        response = prompt("Rock, paper, or scissors?");
    }
}

getHumanChoice();