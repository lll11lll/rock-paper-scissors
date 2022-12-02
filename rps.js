// 01/12/2022
// Nick Greiner
// Rock-paper-Scissors only using the console

// get computer turns
// generates a number between 1 - 3
// 1 - Rock 2 - Paper 3 - Scissors
function getComputerTurn() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return 'rock'
    } else if (num == 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getPlayerTurn() {
    let input = prompt('Rock, Paper, or Scissors').toLowerCase()
    if (input === 'rock') {
        return 'rock'
    } else if (input === 'paper') {
        return 'paper'
    } else if (input === 'scissors') {
        return 'scissors'   
    } else {
        console.log('Invalid input')
    }
}


// Get the inputs of computer and player and then compare 
function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return 'Tie'
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    }
}

function main() {
    for (let i = 0; i < 5; i++) {
        let playerTurn = getPlayerTurn()
        let computerTurn = getComputerTurn()
        console.log(playRound(computerTurn, playerTurn))
    }
}
main()
