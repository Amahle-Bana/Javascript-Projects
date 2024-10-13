const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else {
      console.log(`Fill in the right words.`)
    }
  }
console.log(getUserChoice('rock'));

const getComputerChoice = () => {
    number = Math.floor(Math.random() * 3);
    if (number === 0) {
      return 'rock'
    } else if (number === 1) {
      return 'paper'
    } else if (number === 2) {
      return 'scissors'
    }
  }
  
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game was a tie';
    } 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won'
      } else {
        return 'The User Won'
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer Won'
      }
      else {
        return 'The User Won'
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The Computer Won'
      } else {
        return 'The User Won'
      }
    }
  }
  
const playGame = () => {
     let userChoice = getUserChoice('rock');
     let computerChoice = getComputerChoice();
     console.log(`${userChoice} - ${computerChoice}`);
     console.log(playGame(determineWinner(userChoice, computerChoice)));
  }

playGame();