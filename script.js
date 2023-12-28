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
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');
  const selections = document.querySelector('#selections')
  const results = document.querySelector('#results');
  const score = document.querySelector('#score');
  const winner = document.querySelector('#winner');
  const ctn2 = document.querySelector('.ctn2')

  rock.addEventListener('click', () => playRound('Rock'))
  paper.addEventListener('click', () => playRound('Paper'))
  scissors.addEventListener('click', () => playRound('Scissors'))


  for (let i = 0; i < 5; i++) {
    let round = 0;
    let pScore = 0;
    let cScore = 0;

    function playRound(playerSelection, computerSelection) {
      computerSelection = getComputerChoice();

      const selectionsString = `Your selection: <strong>${playerSelection}</strong> | Computer selection: <strong>${computerSelection}</strong>`;
      // const scoreString = `You ${pScore} x ${cScore} Computer`;

      if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        round++;
        selections.innerHTML = selectionsString;
        results.innerHTML = `Round ${round}: <strong>You Win!</strong> Rock beats Scissors.`;
        pScore++;
        score.innerHTML = `You ${pScore} x ${cScore} Computer`;
      }
      else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        round++;
        selections.innerHTML = selectionsString;
        results.innerHTML = `Round ${round}: <strong>You Win!</strong> Paper beats Rock.`;
        pScore++;
        score.innerHTML = `You ${pScore} x ${cScore} Computer`;
      }
      else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        round++;
        selections.innerHTML = selectionsString;
        results.innerHTML = `Round ${round}: <strong>You Win!</strong> Scissors beats Paper.`;
        pScore++;
        score.innerHTML = `You ${pScore} x ${cScore} Computer`;
      }
      else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        round++;
        selections.innerHTML = selectionsString;
        results.innerHTML = `Round ${round}: <strong>You Lose!</strong> Paper beats Rock.`;
        cScore++;
        score.innerHTML = `You ${pScore} x ${cScore} Computer`;
      }
      else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        round++;
        selections.innerHTML = selectionsString;
        results.innerHTML = `Round ${round}: <strong>You Lose!</strong> Scissors beats Paper.`;
        cScore++;
        score.innerHTML = `You ${pScore} x ${cScore} Computer`;
      }
      else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        round++;
        selections.innerHTML = selectionsString;
        results.innerHTML = `Round ${round}: <strong>You Lose!</strong> Rock beats Scissors.`;
        cScore++;
        score.innerHTML = `You ${pScore} x ${cScore} Computer`;
      }
      else {
        round++;
        selections.innerHTML = selectionsString;
        results.innerHTML = `Round ${round}: <strong>Tie!</strong> ${playerSelection} and ${computerSelection} are equal.`;
        score.innerHTML = `You ${pScore} x ${cScore} Computer`;
      }

      let reload = document.createElement('button')
      reload.setAttribute('id', 'reload')

      if (pScore === 5) {
        winner.textContent = 'You win!'
        rock.setAttribute('disabled', '')
        paper.setAttribute('disabled', '')
        scissors.setAttribute('disabled', '')
        rock.style.cursor = "default"
        paper.style.cursor = "default"
        scissors.style.cursor = "default"
        ctn2.appendChild(reload);
        reload.innerText = 'Play again'
        reload.addEventListener('click', () => location.reload())

      } else if (cScore === 5) {
        winner.textContent = 'Computer wins!'
        rock.setAttribute('disabled', '')
        paper.setAttribute('disabled', '')
        scissors.setAttribute('disabled', '')
        rock.style.cursor = "default"
        paper.style.cursor = "default"
        scissors.style.cursor = "default"
        ctn2.appendChild(reload);
        reload.innerText = 'Play again'
        reload.addEventListener('click', () => location.reload())
      }
    }
  }
}

game();
// const playerSelection = "Paper";
// const computerSelection = getComputerChoice();
