let userInput;

// Function that manages the whole game
function game() {
    let roundWinner;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Ask user for input
        userInput = prompt("Enter your choice");

        // Store the userinput and computer choice in a variable
        const playerSelection = userInput;
        const computerSelection = computerPlay();

        // call the playRound function for a single round and store the winner in the roundWinner variable
        roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner == "player") {
            playerScore++;
        } else if (roundWinner == "computer") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You are the winner.");
    } else if (playerScore < computerScore) {
        console.log("The computer won.")
    } else {
        console.log("It's a tie between you two.");
    }

    console.log("Final score: You: " + playerScore + " - Computer: " + computerScore);
}

// Function to create the random computer choice
function computerPlay() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * myArray.length);
    return myArray[random];
}

// Function that plays a round and determines the winner
function playRound(playerSelection, computerSelection) {
    // Keep track of the wins
    let playerWin = 0;
    let computerWin = 0;

    // Check if the player entered "rock"
    if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Paper".toUpperCase()) {
        console.log("You lose! Paper beats Rock");
        computerWin++;
    } else if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Scissors".toUpperCase()) {
        console.log("You win! Rock beats Scissors");
        playerWin++;
    } else if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Rock".toUpperCase()) {
        console.log("It's a tie");
    }

    // check if the player entered "paper"
    if (playerSelection.toUpperCase() == "Paper".toUpperCase() && computerSelection.toUpperCase() == "Paper".toUpperCase()) {
        console.log("It's a tie");
    } else if (playerSelection.toUpperCase() == "Paper".toUpperCase() && computerSelection.toUpperCase() == "Scissors".toUpperCase()) {
        console.log("You Lose! Scissors beats Paper");
        computerWin++;
    } else if (playerSelection.toUpperCase() == "Paper".toUpperCase() && computerSelection.toUpperCase() == "Rock".toUpperCase()) {
        console.log("You win! Paper beats Rock");
        playerWin++;
    }
    
    // check if the player entered "scissors"
    if (playerSelection.toUpperCase() == "Scissors".toUpperCase() && computerSelection.toUpperCase() == "Paper".toUpperCase()) {
        console.log("You win! Scissors beats Paper");
        playerWin++;
    } else if (playerSelection.toUpperCase() == "Scissors".toUpperCase() && computerSelection.toUpperCase() == "Scissors".toUpperCase()) {
        console.log("It's a tie");
    } else if (playerSelection.toUpperCase() == "Scissors".toUpperCase() && computerSelection.toUpperCase() == "Rock".toUpperCase()) {
        console.log("You lose! Rock beats Scissors");
        computerWin++;
    }

    // Check who won the round
    if (playerWin > computerWin) {
        return "player";
    } else if (playerWin < computerWin) {
        return "computer";
    } else {
        return "tie";
    }
}

// Start game
game();