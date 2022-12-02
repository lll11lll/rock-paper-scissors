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
function main() {
    console.log(getPlayerTurn())
}
main()
