// Define elements
const subtitle = document.querySelector('.subtitle');
const p1score = document.querySelector('.p1-score');
const p2score = document.querySelector('.p2-score');
const playerHandImage = document.querySelector('.player-hand-image');
const computerHandImage = document.querySelector('.computer-hand-image');

const btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset');
const options = ['Rock', 'Paper', 'Scissors'];

let score1, score2, playing, playerChoice, pcChoice;

//Functions
const initGame = function () {
  score1 = 0;
  score2 = 0;
  playing = true;
  p1score.textContent = score1;
  p2score.textContent = score2;
  subtitle.textContent = 'First to five wins!';
  playerHandImage.src = `./img/Icons/player-Rock.png`;
  computerHandImage.src = `./img/Icons/pc-Rock.png`;
  playerChoice, pcChoice;
};

initGame();

const choices = function (p1Choice, p2Choice) {
  console.log(p1Choice, p2Choice);
};

const animate = function (hand1, hand2) {
  hand1.classList.add('animated');
  hand2.classList.add('animated');
};

const chooseWinner = function () {
  playerHandImage.classList.remove('animated');
  computerHandImage.classList.remove('animated');

  //3. Set player hand icon
  playerHandImage.src = `./img/Icons/player-${playerChoice}.png`;
  computerHandImage.src = `./img/Icons/pc-${pcChoice}.png`;

  //4. Compare player choices
  if (playerChoice === pcChoice) {
    subtitle.textContent = 'Draw';
    console.log('draw');
    return;
  }
  if (playerChoice === 'Rock') {
    if (pcChoice === 'Paper') {
      subtitle.textContent = 'Computer Wins';
      score2++;
      updateScore();
      return;
    } else {
      subtitle.textContent = 'Player Wins';
      score1++;
      updateScore();
      return;
    }
  }
  if (playerChoice === 'Paper') {
    if (pcChoice === 'Scissors') {
      subtitle.textContent = 'Computer Wins';
      score2++;
      updateScore();
      return;
    } else {
      subtitle.textContent = 'Player Wins';
      score1++;
      updateScore();
      return;
    }
  }
  if (playerChoice === 'Scissors') {
    if (pcChoice === 'Rock') {
      subtitle.textContent = 'Computer Wins';
      score2++;
      updateScore();
      return;
    } else {
      subtitle.textContent = 'Player Wins';
      score1++;
      updateScore();
      return;
    }
  }
};

const updateScore = function () {
  //5. Update score and decide whether game has finished.
  p1score.textContent = score1;
  p2score.textContent = score2;

  if (score1 === 5) {
    playing = false;
    subtitle.textContent = 'Game over - Player has won';
  } else if (score2 === 5) {
    playing = false;
    subtitle.textContent = 'Game over - Computer has won';
  }
};

btns.forEach(button => {
  button.addEventListener('click', function () {
    if (playing) {
      //1. Process which button has been pressed
      playerHandImage.src = `./img/Icons/player-Rock.png`;
      computerHandImage.src = `./img/Icons/pc-Rock.png`;
      playerChoice = this.textContent;
      pcChoiceNum = Math.trunc(Math.random() * 3);
      pcChoice = options[pcChoiceNum];
      choices(this.textContent, pcChoice);

      //2. Start hands animation
      animate(playerHandImage, computerHandImage);
      playerHandImage.addEventListener('animationend', chooseWinner);
    }
  });
});

resetBtn.addEventListener('click', function () {
  initGame();
});
