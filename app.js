console.log("Hello");

function computerPlay() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * myArray.length);
    console.log(myArray[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "It's a tie";
    }
}