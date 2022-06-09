import GamePlay from './gamePlay';
import StartGame from './startGame';

const gamePlay = new GamePlay();
const newGame = new StartGame(gamePlay);

newGame.start();
