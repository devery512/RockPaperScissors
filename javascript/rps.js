// ------------- ROCK PAPER SCISSORS GAME!!! ---------------------------------------

alert("Welcome to Rock, Paper, Scissors.")
var computerChoice = Math.floor(Math.random()*3)

var playerChoice = prompt("Choose: 0 for Rock, 	1 for Paper, 2 for Scissors");
if (computerChoice == 0 )
	{
		computerChoice = "rock";	
	}
	else if(computerChoice == 1)
	{
		computerChoice = "paper";
	}
	else
	{
		computerChoice = "scissors";
	}

if (playerChoice == 0 )
	{
		playerChoice = "rock";	
	}
	else if(playerChoice == 1)
	{
		playerChoice = "paper";
	}
	else
	{
		playerChoice = "scissors";
	}


var compare = function(a,b)
{
 if (a === b)
 {
 	console.log("its a tie");
 }
 else if((a == "rock" && b == "scissors") || (a == "paper" && b == "rock") || (a == "scissors" && b =="paper"))
 {
 	console.log("computer wins");
 }
 else if((a == "rock" && b == "scissors") || (a == "paper" && b == "rock") || (a == "scissors" && b =="paper"))
 {
 	console.log("player wins");
 }
}


console.log("Computer's choice: " + computerChoice);
console.log("Player's choice: " + playerChoice);
compare(computerChoice,playerChoice);