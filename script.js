function getComputerChoice (){
    const choice = Math.random();
    if (choice<0.33){
        return "rock";
    }
    else if ( choice > 0.66){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function getHumanChoice (){

   const userInput = prompt("enter rock, paper or scissors")
   return userInput.toLowerCase();
}



function playGame (){

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){

    if (humanChoice === computerChoice){
       console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" ){
        console.log("You won, HUMAN beats COMPUTER");
        humanScore++;
    }
    else{
        console.log("You lost, COMPUTER beats HUMAN");
        computerScore++;
    }
}


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore){
        console.log("You won the game!");
    }
    else if (humanScore < computerScore){
        console.log("You lost the game!");
    }
    else{
        console.log("The game is a tie!");
    }   
}

playGame();