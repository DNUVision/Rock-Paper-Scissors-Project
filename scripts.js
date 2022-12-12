/*The function decleration presented below is the computer's choice.
  random and floor methods are being used to generate a value between 0 and 2
  afterwards there is a switch statmenet that assigns each number to a value */    
function getComputerChoice(){
    const comSelection = Math.floor(Math.random()*3);
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
   I declare function playRound() and give (player, computer) parameters
   each round's result and total rounds' result wil be presented on a created div */

let playerCounter = 0;
let computerCounter = 0;   
const newElem = document.createElement("div");
const totalScore = document.createElement("div");
newElem.classList.add("score");
totalScore.classList.add("score"); 
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

/*inside the function game(), I call playRound(), the game will go on until one has reached 5 points.
and then using if statements the score will reset itself*/
function game(){
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
}
   
game();
