/*



*/


function getComputerChoice(){
    let move = Math.floor(Math.random()*3);
    let result;
    switch(move){
        case 0:
            result = "ROCK";
            return result;
        case 1:
            result = "PAPER";
            return result;
        case 2:
            result = "SCISSORS";
            break;
    }
    return result;
}


function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Choose either Rock, Paper or Scissors: ").toUpperCase();
    let outcome;
    if(playerSelection == "ROCK" && computerSelection == "ROCK"){
        outcome = "it is a tie, no one wins";
    }else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        outcome = "Computer wins! you lose!";
    }else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        outcome = "You win!";
    }else{
        outcome = "This is " + playerSelection + " and " + computerSelection;
    }
    return outcome;
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound());