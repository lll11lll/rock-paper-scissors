// 01/12/2022
// Nick Greiner
// Rock-paper-Scissors only using the console

// get computer turns
// generates a number between 1 - 3
// 1 - Rock 2 - Paper 3 - Scissors
function getComputerTurn() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return 'Rock'
    } else if (num == 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}
console.log(getComputerTurn());
