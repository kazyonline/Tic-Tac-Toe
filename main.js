const Gameboard = function () {
  const board = [];
  const player = (mark, name) => ({ mark, name });

  return { board, player };
};

const newGame = Gameboard();
const player1 = newGame.player('x', 'ade');
const player2 = newGame.player('o', 'ada');
const { board } = newGame;
const container = document.querySelector('.container');

function startGame() {
  container.setAttribute('style', 'display:grid');
}

let state = false;
function checkTurn(player) {
  if (state === false) {
    player = player1.mark;
    state = true;
  } else {
    player = player2.mark;
    state = false;
  }

  return player;
}

function checkwin() {
  if ((board[0] === board[3]) && (board[3] === board[6]) && (board[0] !== (null || undefined))
    || (board[1] === board[4]) && (board[4] === board[7]) && (board[1] !== (null || undefined))
    || (board[2] === board[5]) && (board[5] === board[8]) && (board[2] !== (null || undefined))
    || (board[0] === board[1]) && (board[1] === board[2]) && (board[0] !== (null || undefined))
    || (board[3] === board[4]) && (board[4] === board[5]) && (board[3] !== (null || undefined))
    || (board[6] === board[7]) && (board[7] === board[8]) && (board[7] !== (null || undefined))
    || (board[2] === board[4]) && (board[4] === board[6]) && (board[2] !== (null || undefined))
    || (board[0] === board[4]) && (board[4] === board[8]) && (board[0] !== (null || undefined))) {
    alert('We have a winner');
    location.reload();
  }
}

const displayMarker = (e) => {
  e.target.innerHTML = checkTurn();
  board[Number((e.target.id))] = e.target.innerHTML;
  checkwin();
};

const boxes = document.querySelectorAll('.grid-box');

boxes.forEach((el) => {
  el.addEventListener('click', displayMarker, { once: true });
});
