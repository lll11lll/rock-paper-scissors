// 01/12/2022
// Nick Greiner
// Rock-paper-Scissors only using the console

// get computer turns
// generates a number between 1 - 3
// 1 - Rock 2 - Paper 3 - Scissors

// When lives are zero make a pop up depending who actually won.


const rockButton = document.querySelector('.rockPButton')
const paperButton = document.querySelector('.paperPButton')
const scissorButton = document.querySelector('.scissorPButton')
const confirmButton = document.querySelector('.confirmButton')
let playerChoice
let playerLives = 5
let computerLives = 5
rockButton.addEventListener('click', function(e) {
    alert("Player Chooses Rock!")
    playerChoice = 'rock'
    rockButton.classList.add('greenBG')
    paperButton.classList.remove('greenBG')
    scissorButton.classList.remove('greenBG')
    console.log(playerChoice)

})

paperButton.addEventListener('click', function(e) {
    alert("Player Chooses Paper!")
    playerChoice = 'paper'
    paperButton.classList.add('greenBG')
    rockButton.classList.remove('greenBG')
    scissorButton.classList.remove('greenBG')
    console.log(playerChoice)
})

scissorButton.addEventListener('click', function(e) {
    alert("Player Chooses Scissors!")
    playerChoice = 'scissors'
    scissorButton.classList.add('greenBG')
    paperButton.classList.remove('greenBG')
    rockButton.classList.remove('greenBG')
    console.log(playerChoice)
})
confirmButton.addEventListener('click', function(e) {
    let computerTurn = getComputerTurn()
    alert(playRound(computerTurn, playerChoice))
    alert(`Player's lives ${playerLives}\t\t|\t\tComputer's lives ${computerLives}`)

})

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

// Get the inputs of computer and player and then compare 
function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return 'Tie'
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        computerLives -= 1;
        updateComputerLives(computerLives)
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        playerLives -= 1;
        updatePlayerLives(playerLives)
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        playerLives -= 1;
        updatePlayerLives(playerLives)
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        computerLives -= 1;
        updateComputerLives(computerLives)
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        computerLives -= 1;
        updateComputerLives(computerLives)
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        playerLives -= 1;
        updatePlayerLives(playerLives)
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    }
}

function updateComputerLives(computerLives) {
    let heartImages = ['images/heartFindNBG.png', 'images/heartHollow.png']
    const heartImgs = document.querySelectorAll('.cHeart');
    for(let i = 0; i < heartImgs.length; i++) {
        let imgIndex;
        if (i < computerLives) {
            imgIndex = 0;
        } else {
            imgIndex = 1;
        }
        heartImgs[i].src = heartImages[imgIndex];
    }
}

function updatePlayerLives(playerLives) {
    let heartImages = ['images/heartFindNBG.png', 'images/heartHollow.png']
    const heartImgs = document.querySelectorAll('.pHeart');
    for(let i = 0; i < heartImgs.length; i++) {
        let imgIndex;
        if (i < playerLives) {
            imgIndex = 0;
        } else {
            imgIndex = 1;
        }
        heartImgs[i].src = heartImages[imgIndex];
    }
}
// function main() {
//     for (let i = 0; i < 5; i++) {
//         let playerTurn = getPlayerTurn()
//         let computerTurn = getComputerTurn()
//         console.log(playRound(computerTurn, playerTurn))
//     }
// }
// main()





// function getPlayerTurn() {
//     let input = prompt('Rock, Paper, or Scissors').toLowerCase()
//     if (input === 'rock') {
//         return 'rock'
//     } else if (input === 'paper') {
//         return 'paper'
//     } else if (input === 'scissors') {
//         return 'scissors'   
//     } else {
//         console.log('Invalid input')
//     }
// }
