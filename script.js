let humanScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener( "click" , function (){
    playRound( "rock" , getComputerChoice ());
});

document.getElementById("paper").addEventListener( "click" , function () {
    playRound( "paper" , getComputerChoice ());
});

document.getElementById("scissors").addEventListener( "click" , function () {
    playRound( "scissors" , getComputerChoice ());
});

function playRound (humanChoice, computerChoice){
    let message;
    if (humanChoice === computerChoice){
       message= "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" ){
        message= "You won!" + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else{
        message= "You lost!" + computerChoice + " beats " + humanChoice;
        computerScore++;
    }

    document.getElementById("results").textContent = message;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (humanScore === 6 || computerScore ===6){
        const winner = humanScore===6 ? "You" : "computer";
        document.getElementById("results").textContent = winner + " Won The Game!!";
        disableButtons();

    }

}

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

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}
