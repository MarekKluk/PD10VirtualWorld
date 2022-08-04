import './styles.css';
import Board from "./Classes/Board";

let board = new Board();
board.createNewGame(20);
document.addEventListener('keyup', board.setNewCoordinatesForPlayer);
