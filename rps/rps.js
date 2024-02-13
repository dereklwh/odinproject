// console.log("Hello World!!!");

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    index = getRandomIndex(choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    //Tie Case (player = computer)
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            return "You lose, Paper beats Rock";
        } else {
            playerScore++;
            return "You win, Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            return "You win, Paper beats Rock";
        } else {
            computerScore++;
            return "You lose, Scissors beats Paper";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
            return "You lose, Rock beats Scissors";
        } else {
            playerScore++;
            return "You win, Scissors beats Paper";
        }
    }
}

// function playGame() {
//     let engaged = 1;
//     while (engaged==1) {
//         let playerSelection = prompt("rock, paper, scissors!");
//         playerSelection = playerSelection.toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));

//         if (prompt("do you want to keep playing? [y/n]") == 'n') {
//             engaged = 0;
//         }
//     }
// }

// playGame();

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.rps button');
const title = document.querySelector('.container h1');

function updateScoreDisplay() {
    document.querySelector('.score .player-score').textContent = `Player Score: ${playerScore}`;
    document.querySelector('.score .computer-score').textContent = `Computer Score: ${computerScore}`;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        title.textContent = playRound(playerSelection, computerSelection);


        updateScoreDisplay();
    });
});

updateScoreDisplay();