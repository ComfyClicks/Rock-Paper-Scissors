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
  const getRound = document.querySelector('#round');
  if (playerChoice === computerChoice) getRound.textContent = 'Round ' + round + ' Is a Tie!';

  else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      getRound.textContent = 'Computer Wins Round ' + round;
      computerScore++;
    } else {
      getRound.textContent = 'You Win Round ' + round;
      playerScore++;
    }
  }

  else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      getRound.textContent = 'Computer Wins Round ' + round;
      computerScore++;
    } else {
      getRound.textContent = 'You Win Round ' + round;
      playerScore++;
    }
  }

  else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      getRound.textContent = 'Computer Wins Round ' + round;
      computerScore++;
    } else {
      getRound.textContent = 'You Win Round ' + round;
      playerScore++;
    }
  }
}

function resetGame() {
  const resetWinner = document.querySelector('#winner');
  resetWinner.textContent = '';
  round = 1;
  playerScore = 0;
  computerScore = 0;
}

function setWinner() {
  const gameWinner = document.querySelector('#round');
  const playerScoreH2 = document.querySelector('#playerScore');
  const computerScoreH2 = document.querySelector('#computerScore');

  if (playerScore === 5) gameWinner.textContent = 'You Win!';
  if (computerScore === 5) gameWinner.textContent = 'Computer Wins!';

  playerScoreH2.textContent = playerScore;
  computerScoreH2.textContent = computerScore;
}

function getPlayerChoice() {
  const rockBtn = document.querySelector('#rock')
  const paperBtn = document.querySelector('#paper')
  const scissorsBtn = document.querySelector('#scissors')

  const playerOptions = [rockBtn, paperBtn, scissorsBtn];

  const handleClick = function() {
    if (playerScore < 5 && computerScore < 5) {
      playerChoice = this.id;
      console.log('Player chooses', playerChoice);
      round ++;
      setRound();
      getComputerChoice();
      console.log('Computer chooses', computerChoice);
      displayChoice();
      console.log('Player Score', playerScore);
      console.log('Computer Score', computerScore);
      getWinner();
      setWinner();
    } else {
      playerOptions.forEach(choice => {
        choice.removeEventListener('click', handleClick);
      });
      resetGame();
    }
  };

  playerOptions.forEach(choice => {
    choice.addEventListener('click', handleClick);
  });
}




getPlayerChoice();