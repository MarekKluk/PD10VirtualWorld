import './styles.css';
import Board from './Classes/Board';
const newGameButton = document.querySelector('.new-game-button');
const newGamePopup = document.querySelector('.new-game-popup-container');
const controlButtons = document.querySelector('.control-buttons');

newGameButton.addEventListener('click', () => {
  let board = new Board();
  board.createNewGame(20);
  document.addEventListener('keyup', board.setNewCoordinatesForPlayer);
  newGamePopup.classList.add('inactive');
  controlButtons.classList.add('active');
});
