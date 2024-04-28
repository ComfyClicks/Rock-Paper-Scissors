let round = 1;
let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

let winner;

function setRound() {
  const getRound = document.querySelector('#round');
  getRound.textContent = 'Round ' + round.toString();
}

setRound();

function getComputerChoice() {
  const choices = ['rock', 'paper','scissors'];

  let choiceNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[choiceNumber];
}

function displayChoice() {
  const playersHand = document.querySelector('#playersHand');
  const computersHand = document.querySelector('#computersHand')

  if (playerChoice === 'rock') playersHand.textContent = '🪨';
  if (playerChoice === 'paper') playersHand.textContent = '📃';
  if (playerChoice === 'scissors') playersHand.textContent = '✂️';

  if (computerChoice === 'rock') computersHand.textContent = '🪨';
  if (computerChoice === 'paper') computersHand.textContent = '📃';
  if (computerChoice === 'scissors') computersHand.textContent = '✂️';
}

function getWinner() {
  const winnerHeader = document.querySelector('#winner');
  if (playerChoice === computerChoice) winnerHeader.textContent = "It's a Tie!";

  else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      winnerHeader.textContent = 'Computer Wins Round';
      computerScore++;
    } else {
      winnerHeader.textContent = 'Player Wins Round';
      playerScore++;
    }
  }

  else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      winnerHeader.textContent = 'Computer Wins Round';
      computerScore++;
    } else {
      winnerHeader.textContent = 'Player Wins Round';
      playerScore++;
    }
  }

  else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      winnerHeader.textContent = 'Computer Wins Round';
      computerScore++;
    } else {
      winnerHeader.textContent = 'Player Wins Round';
      playerScore++;
    }
  }
}

// function setWinner() {
//   if (playerScore === 5) 
// }

function getPlayerChoice() {
  const rockBtn = document.querySelector('#rock')
  const paperBtn = document.querySelector('#paper')
  const scissorsBtn = document.querySelector('#scissors')

  const playerOptions = [rockBtn, paperBtn, scissorsBtn];

  playerOptions.forEach(choice => {
    choice.addEventListener('click', () => {
      playerChoice = choice.id;
      console.log('Player chooses', playerChoice);
      round ++;
      setRound();
      getComputerChoice();
      console.log('Computer chooses', computerChoice);
      displayChoice();
      getWinner();
    })
  })
}



getPlayerChoice();