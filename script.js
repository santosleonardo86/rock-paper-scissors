function getComputerChoice() {
  let list = ['Rock', 'Paper', 'Scissors'];

  let random = Math.floor(Math.random() * list.length);
  // console.log(random);

  if (random === 0) {
    console.log(`Computer selection: ${list[0]}`);
    return list[0]
  } else if (random === 1) {
    console.log(`Computer selection: ${list[1]}`);
    return list[1]
  } else {
    console.log(`Computer selection: ${list[2]}`);
    return list[2]
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let cont = i + 1;
    console.log(cont);

    function playRound(playerSelection, computerSelection) {
      playerSelection = prompt(`Rock, Paper, Scissors (rodada ${cont}/5): `);

      let lowerCaseString = playerSelection.toLowerCase(); //the lower case problem
      let upperCaseString = playerSelection.toUpperCase(); //THE UPPER CASE PROBLEM.
      let slicedString = upperCaseString.slice(0, 1); //T
      let slicedString2 = lowerCaseString.slice(1); //he uppercase problem.
      let concatString = slicedString + slicedString2;

      playerSelection = concatString;
      computerSelection = getComputerChoice();

      if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log(`Your selection: ${playerSelection}`);
        return "Result: You Win! Rock beats Scissors";
      }
      else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log(`Your selection: ${playerSelection}`);
        return "Result: You Win! Paper beats Rock";
      }
      else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log(`Your selection: ${playerSelection}`);
        return "Result: You Win! Scissors beats Paper";
      }
      else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log(`Your selection: ${playerSelection}`);
        return "Result: You Lose! Paper beats Rock";
      }
      else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log(`Your selection: ${playerSelection}`);
        return "Result: You Lose! Scissors beats Paper";
      }
      else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log(`Your selection: ${playerSelection}`);
        return "Result: You Lose! Rock beats Scissors";
      }
      else {
        console.log(`Your selection: ${playerSelection}`);
        return `Result: Tie! ${playerSelection} and ${computerSelection} are equal.`;
      }
    }
    console.log(playRound());
  }
}

game();
// const playerSelection = "Paper";
// const computerSelection = getComputerChoice();
