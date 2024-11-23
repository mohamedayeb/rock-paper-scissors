function getComputerChoice() {
    const ran = Math.floor(Math.random() * 3);
    if(ran === 0) {
        return "Rock";
    } else if(ran === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(message) {
    if(message == undefined) {
        message= "";
    }
    message = message + "Choose Rock, Paper or Scissors";
    const humanChoice = prompt(message);
    if(humanChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if(humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if(humanChoice.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        return getHumanChoice("Your previous choice is invalid. ");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        console.log("Tie");
    } else {
        if(humanChoice === "Rock") {
            if(computerChoice === "Paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
        } else if(humanChoice === "Paper") {
            if(computerChoice === "Scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            } else {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
        } else {
            if(computerChoice === "Rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } else {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
        }
    }
}

function playGame() {
    for(let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice(`Round ${i} `);
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if(humanScore === computerScore) {
        console.log(`Tie! Final score: ${humanScore}-${computerScore}`);
    } else if( humanScore < computerScore) {
        console.log(`You lose! Final score: ${humanScore}-${computerScore}`);
    } else {
        console.log(`You win! Final score: ${humanScore}-${computerScore}`);
    }
}

playGame();