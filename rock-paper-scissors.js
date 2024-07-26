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
            return response;
        }

        response = prompt("Rock, paper, or scissors?");
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {console.log("You tied."); }
        else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerScore++;
                console.log("You lose! Paper covers rock.");
            }
            else {
                humanScore++;
                console.log("You win! Rock beats scissors.");
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                computerScore++;
                console.log("You lose! Scissors cut paper.");
            }
            else {
                humanScore++;
                console.log("You win! Paper covers rock.");
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore++;
                console.log("You lose! Rock beats scissors.");
            }
            else {
                humanScore++;
                console.log("You win! Scissors cut paper.");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        console.log("You: " + humanSelection + " | Score: " + humanScore);
        console.log("CPU: " + computerSelection + " | Score: " + computerScore);
    }
}

playGame();