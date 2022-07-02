     
  // lets start with some variables
       let choices = ["ROCK", "PAPER", "SCISSORS" ];
       let computerSelection;
       let userSelection;
       let userInput;
       let i = 0 ;
       let userWins = 0;
       let computerWins = 0 ;

// using the Math method to get a random choice for the computer
function computerPlay(choices) {
    choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random()*choices.length)]; //used this math() method to get a random elemnt of the array 
} 
// making a function to play a single round, and counting the winners of each round :
function playRound(userSelection, computerSelection) {

    userInput = prompt("choose your weapon: ");
userSelection = userInput.toUpperCase()   ; //converted the string to upperCase so the prompt could be case insinsitive
computerSelection = computerPlay(choices);

if (userSelection === "ROCK" && computerSelection === "SCISSORS" || userSelection === "PAPER" && computerSelection === "ROCK" || userSelection === "SCISSORS" && computerSelection === "PAPER") 
{
    userWins++ ;
    console.log (`you won! you chose ${userSelection} and the computer chose ${computerSelection}.`) ;
    return;
}
else if (userSelection === "ROCK" && computerSelection === "PAPER" || userSelection === "PAPER" && computerSelection === "SCISSORS" || userSelection === "SCISSORS" && computerSelection === "ROCK")
{
    computerWins++ ;
    console.log (`you lost! you chose ${userSelection} and the computer chose ${computerSelection}.`) ;
    return;
}
else
{
    console.log (`it's a tie! you both chose ${userSelection}`) ;
    return;
}


  }
// used this function to play 5 rounds and declare a winner
function game(){
    console.log("welcome to RPS!")
    for (i = 0 ; i <= 5 ; i++){
        playRound(userSelection, computerSelection) ;
        console.log(`(you:${userWins} : ${computerWins} com)`)
        
    }
    console.log("game over");
    if(userWins > computerWins){
        console.log(`YOU WON ! , you won ${userWins} out of 5 rounds .`) ;
    }
    else

    console.log(`YOU LOST ! , COM won ${computerWins} out of 5 rounds .`) ;
    
    }
   

  game();



