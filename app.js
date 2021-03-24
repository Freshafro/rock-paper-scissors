/*const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", e => {
    alert("Rock");
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", e => {
    alert("Paper");
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", e => {
    alert("Scissors");
});*/

let userInput;
const body = document.querySelector("body");
const container = document.querySelector("#container");
const buttons = document.querySelectorAll("button");
const content = document.createElement('div');
content.classList.add('content');

function disableButton() {
    buttons.diabled = true;
}

// Function that manages the whole game
function game() {
    let roundWinner;
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    buttons.forEach((button) => {
        button.addEventListener("click", e => {
            userInput = e.target.textContent;

            // Store the userinput and computer choice in a variable
            const playerSelection = userInput;
            const computerSelection = computerPlay();

            // call the playRound function for a single round and store the winner in 
            // the roundWinner variable
            roundWinner = playRound(playerSelection, computerSelection);

            if (roundWinner == "player") {
                playerScore++;
            } else if (roundWinner == "computer") {
                computerScore++;
            }

            round++;

            if (round == 5) {
                if (playerScore > computerScore) {
                    const playerWinner = document.createElement("p");
                    playerWinner.textContent = "You are the winner.";
                    body.appendChild(playerWinner);
                } else if (playerScore < computerScore) {
                    const computerWinner = document.createElement("p");
                    computerWinner.textContent = "The computer won.";
                    body.appendChild(computerWinner);
                } else {
                    const tie = document.createElement("p");
                    tie.textContent = "It's a tie between you two.";
                    body.appendChild(tie);
                }
                
                const finalScore = document.createElement("p");
                finalScore.textContent = `Final score: You:  ${playerScore} - Computer: ${computerScore}`;
                body.appendChild(finalScore);

                container.classList.add("disabledButton");
                
                const reloadPage = document.createElement("button");
                reloadPage.textContent = "Retry?";
                body.appendChild(reloadPage);

                reloadPage.addEventListener("click", () => {
                    window.location.reload();
                });
            }
        });
    });
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

    // Check if the player chose "rock"
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        const rockLose = document.createElement("p");
        rockLose.textContent = "You lose! Paper beats Rock";
        container.appendChild(rockLose);
        computerWin++;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        const rockWin = document.createElement("p");
        rockWin.textContent = "You win! Rock beats Scissors";
        container.appendChild(rockWin);
        playerWin++;
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        const rockTie = document.createElement("p");
        rockTie.textContent = "It's a tie";
        container.appendChild(rockTie);
    }

    // Check if the player chose "paper"
    if (playerSelection == "Paper" && computerSelection == "Paper") {
        const paperTie = document.createElement("p");
        paperTie.textContent = "It's a tie";
        container.appendChild(paperTie);
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        const paperLose = document.createElement("p");
        paperLose.textContent = "You Lose! Scissors beats Paper";
        container.appendChild(paperLose);
        computerWin++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        const paperWin = document.createElement("p");
        paperWin.textContent = "You win! Paper beats Rock";
        container.appendChild(paperWin);
        playerWin++;
    }
    
    // Check if the player chose "scissors"
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        const scissorsWin = document.createElement("p");
        scissorsWin.textContent = "You win! Scissors beats Paper";
        container.appendChild(scissorsWin);
        playerWin++;
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        const scissorsTie = document.createElement("p");
        scissorsTie.textContent = "It's a tie";
        container.appendChild(scissorsTie);
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        const scissorsLose = document.createElement("p");
        scissorsLose.textContent = "You lose! Rock beats Scissors";
        container.appendChild(scissorsLose);
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