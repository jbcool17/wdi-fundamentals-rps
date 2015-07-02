////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var a = prompt();
    return a;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        return 'tie';

    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = 'player';
        return winner;

    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
        return winner;

    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
        return winner;

    } else {
        winner = 'computer';
        return winner;
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var whoWins;
    var iP;
    var iC;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5){
        iP = getPlayerMove();
        iC = getComputerMove();
        console.log("Player Choice: " + iP, "Computer Choice: " + iC);
        whoWins = getWinner(iP, iC);
    
        if (whoWins === 'player') {
            console.log(whoWins + " has won!");
            playerWins += 1;
            
        } else if (whoWins === 'computer') {
            console.log(whoWins + " has won!");
            computerWins += 1;
            
        } else {
            console.log('You have tied!');
        }
        
        console.log("Player: " + playerWins, "Computer: " + computerWins);
    }
    return [playerWins, computerWins]; 
}
