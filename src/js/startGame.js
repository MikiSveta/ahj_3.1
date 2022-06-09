export default class StartGame {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.board = document.querySelector('.goblin-game');
    this.goblin = document.getElementsByClassName('goblin');
    this.point = 0;
  }

  start() {
    this.interval = setInterval(() => this.random(), 1000);
    this.board.addEventListener('click', (e) => this.onclickCell(e));
  }

  random() {
    const randomGoblin = Math.floor(Math.random() * this.goblin.length);
    if (document.querySelector('.goblin_active')) {
      document.querySelector('.goblin_active').classList.remove('goblin_active');
    };
    this.goblin[randomGoblin].classList.add('goblin_active');
  }

  onclickCell(e) {
    if (e.target.closest('.goblin') === document.querySelector('.goblin_active').closest('.goblin')) {
      this.gamePlay.getDead();
    } else {
      this.gamePlay.getLost();
      this.point += 1;
      if (this.point === 5) {
        this.gameOver();
      };
    };
  }

  gameOver() {
    alert('Вы проиграли!');
    this.gamePlay.resetAllScores();
    clearInterval(this.interval);
  };
}
