/*
This is a Rock, Paper, Scissors game
The computer chooses a value randomly
The player is prompted to choose a value 
if the player chose Rock and the computer chose Paper, then computer wins
if the player chose Rock and the computer chose Scissors, then player wins
if the player and the computer both chose Rock, then it is a tie.
same will be for player choosing Scissors or Paper
each time there is a result
the result is kept to that turn's winner
the game will be played for 5 turns
*/

//The function decleration presented below is the player's choice using promot, converting to uppercase and storing the value if the user entered it correctly. 
function getPlayerChoice(){
    let selection = prompt("Please choose either Rock, Scissors or Paper: ").toUpperCase();
    let userResult;
    if(selection == "ROCK" || selection == "SCISSORS" || selection == "PAPER"){
        console.log("This is the user's selection: " + selection);
        userResult = selection;
        return userResult;
    }else{
        alert("You chose wrong. Try again please.");
        return getPlayerChoice();
        }
    }

/*The function decleration presented below is the computer's choice.
  random and floor methods are being used to generate a value between 0 and 2
  afterwards there is a switch statmenet that assigns each number to a value */    
function getComputerChoice(){
    const comSelection = Math.floor(Math.random()*3);
    //console.log(comSelection);
    let result;
    switch(comSelection){
        case 0:
            result = "ROCK";
            break;
        case 1:
            result = "SCISSORS";
            break;
        case 2:
            result = "PAPER";
            break;
        }
    return result;
}

/* two variables initialized and will be used to count the score
   I used function playRound() to pass the prior two functions as callbacks
   the callbacks return the values stored in them and they are compared
   in the if statmenet, and each one is getting a score accordingly */
let playerCounter = 0;
let computerCounter = 0;    
function playRound(player, computer){
    console.log("This is " + player + " and " + computer);
    if((player == "ROCK" && computer == "PAPER") || (player == "PAPER" && computer == "SCISSORS") || (player == "SCISSORS" && computer == "ROCK")){
        console.log("Player lost, Computer wins!");
        //computerCounter++;
        //console.log("computer score is: " + computerCounter);
        return computerCounter++;
    }else if((player == "ROCK" && computer == "SCISSORS") || (player == "SCISSORS" && computer == "PAPER") || (player == "PAPER" && computer == "ROCK")){
        console.log("Computer lost, Player wins!");
        //playerCounter++;
        //console.log("player score is: " + playerCounter);
        return playerCounter++;
    }else{
        console.log("No one wins, it is a TIE!");
    }

}

//inside the function game(), I call playRound() for 5 rounds in the console. 
function game(){
    for(let i = 0; i < 5; i++){
        console.log("Round #" + (i+1));
        console.log("Current Player's score is: " + playerCounter);
        console.log("Current Computer's score is: " + computerCounter);
        playRound(getPlayerChoice(), getComputerChoice());
    }
    console.log("After five rounds the overall score is \nPlayer score: " + playerCounter + " vs Computer score: " + computerCounter);
    if(playerCounter > computerCounter){
        console.log("Player won the five round tournament!");
    }else if(computerCounter > playerCounter){
        console.log("COmputer won the five round tournament!");
    }else{
        console.log("No one won, the five round tournament ended in a DRAW!");
    }
}

    
game();