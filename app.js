function computerPlay() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * myArray.length);
    return myArray[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Paper".toUpperCase()) {
        return "You lose! Paper beats Rock";
    } else if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Scissors".toUpperCase()) {
        return "You win! Rock beats Scissors";
    } else if (playerSelection.toUpperCase() == "Rock".toUpperCase() && computerSelection.toUpperCase() == "Rock".toUpperCase()) {
        return "It's a tie";
    }
}

function game() {
    
}