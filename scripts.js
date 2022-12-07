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
const newElem = document.createElement("div");
const totalScore = document.createElement("div"); 
function playRound(player, computer){
    if((player == "ROCK" && computer == "PAPER") || (player == "PAPER" && computer == "SCISSORS") || (player == "SCISSORS" && computer == "ROCK")){
        newElem.textContent = "Player lost, Computer wins!";
        computerCounter++;
    }else if((player == "ROCK" && computer == "SCISSORS") || (player == "SCISSORS" && computer == "PAPER") || (player == "PAPER" && computer == "ROCK")){
        newElem.textContent = "Computer lost, Player wins!";
        playerCounter++;
    }else{
        newElem.textContent = "No one wins, it is a TIE!";
    }
    const appender = document.querySelector(".container");
    appender.appendChild(newElem);
    totalScore.textContent = "Computer: " + computerCounter + ", Player: " + playerCounter + ".";
    appender.appendChild(totalScore);
}

//inside the function game(), I call playRound() for 5 rounds in the console. 
function game(){
    //for(let i = 0; i < 5; i++){
        //console.log("Round #" + (i+1));
        //console.log("Current Player's score is: " + playerCounter);
        //console.log("Current Computer's score is: " + computerCounter); 
        //playRound(getPlayerChoice(), getComputerChoice());
    //}
    let select;
    const i = document.querySelectorAll("button");
    const looper = i.forEach((val)=>{
        val.addEventListener("click", (e)=> {
            select = e.target.value;
            playRound(select, getComputerChoice());

            if(computerCounter == 5 && computerCounter > playerCounter){
                totalScore.textContent = "Computer Wins! Overall score is - Computer: " + computerCounter + " vs Player: " + playerCounter + ".";
                computerCounter = 0;
                playerCounter = 0;
            }
            if(playerCounter == 5 && playerCounter > computerCounter){
                totalScore.textContent = "Player Wins! Overall score is - Player: " + playerCounter + " vs Computer: " + computerCounter + "."; 
                computerCounter = 0;
                playerCounter = 0;
            }
        });
    });



    /*console.log("After five rounds the overall score is \nPlayer score: " + playerCounter + " vs Computer score: " + computerCounter);
    if(playerCounter > computerCounter){
        console.log("Player won the five round tournament!");
    }else if(computerCounter > playerCounter){
        console.log("COmputer won the five round tournament!");
    }else{
        console.log("No one won, the five round tournament ended in a DRAW!");
    }
    */
}



    
game();


/*const btnFocus = document.querySelectorAll("button");
btnFocus.forEach((btnObj) => {
    btnObj.addEventListener("click", getPlayerChoice);

    function myChoice(){
        const newElem = document.createElement("div");
        newElem.textContent = btnObj.textContent;
        document.body.appendChild(newElem);
    }
}); */
//The function decleration presented below is the player's choice using promot, converting to uppercase and storing the value if the user entered it correctly. 
//function getPlayerChoice(){
//    let selection;
//    let userResult;
    



   /* const btnFocus = document.querySelectorAll("button");
    btnFocus.forEach((btnObj) => {
        btnObj.addEventListener("click", (e) =>{
            selection = e.target.value;
            //let selection = prompt("Please choose either Rock, Scissors or Paper: ").toUpperCase();
            if(selection == "ROCK" || selection == "SCISSORS" || selection == "PAPER"){
            console.log("This is the user's selection: " + selection);
            userResult = selection;
            return userResult;
            }});
    });*/
    //let selection = prompt("Please choose either Rock, Scissors or Paper: ").toUpperCase();
   //if(selection == "ROCK" || selection == "SCISSORS" || selection == "PAPER"){
   //     console.log("This is the user's selection: " + selection);
   //     userResult = selection;
   //     return userResult;
   // }/*else{
   //     alert("You chose wrong. Try again please.");
   //     return getPlayerChoice();
   //     }  */
   // }