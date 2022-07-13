     
  // lets start with some variables
       let choices = ["ROCK", "PAPER", "SCISSORS" ];
       let computerSelection;
       let userSelection;
       let userInput;
       let i = 0 ;
       let userWins = 0;
       let computerWins = 0 ;

       let userScore = document.querySelector('.user-wins') ;
       userScore.innerHTML = `${userWins}` ;
       
       let computerScore = document.querySelector('.computer-wins') ;
computerScore.innerHTML = `${computerWins}` ;


// using the Math method to get a random choice for the computer
function computerPlay(choices) {
    choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*choices.length)];  //used this math() method to get a random element of the array 
} 
// making a function to play a single round, and counting the winners of each round :
function playRound(userSelection, computerSelection) {
    if (userWins > 4)
    {coms.innerHTML = "GAME OVER! YOU WON" ;
    return ;
}
if (computerWins > 4)
{coms.innerHTML = "GAME OVER! YOU LOST" ;
return ;
}

  
computerSelection = computerPlay(choices);

if (userSelection === "rock" && computerSelection === "scissors" || userSelection === "paper" && computerSelection === "rock" || userSelection === "scissors" && computerSelection === "paper") 
{
    userWins++ ;
    userScore.innerHTML = `${userWins}`
    coms.innerHTML = (`you win! ${userSelection} beats ${computerSelection}.`) ;
    return;
}
else if (userSelection === "rock" && computerSelection === "paper" || userSelection === "paper" && computerSelection === "scissors" || userSelection === "scissors" && computerSelection === "rock")
{
    computerWins++ ;
    computerScore.innerHTML = `${computerWins}` ;
    coms.innerHTML = (`you lost! ${computerSelection} beats ${userSelection}.`) ;
    return;
}
else
{
    coms.innerHTML = (`it's a tie! you both chose ${userSelection}`) ;
    return;
}


  }
const rock = document.querySelector('#rock') ;
rock.addEventListener('click' , () => {
    playRound("rock", computerSelection) ;
})

const paper = document.querySelector('#paper') ;
paper.addEventListener('click' , () => {
    playRound("paper", computerSelection) ;
})


const scissors = document.querySelector('#scissors') ;
scissors.addEventListener('click' , () => {
    playRound("scissors", computerSelection) ;
})

const coms = document.querySelector('.coms') ;


function refresh() {
    document.reload()
}

const playAgain = document.createElement('a')
playAgain.addEventListener('click', refresh())
