export default class GamePlay {
  constructor() {
    this.dead = document.getElementById('dead');
    this.lost = document.getElementById('lost');
  }

  getDead() {
    this.dead.textContent = Number(this.dead.textContent) + 1;
  }

  getLost() {
    this.lost.textContent = Number(this.lost.textContent) + 1;
  }

  resetAllScores() {
    this.dead.textContent = 0;
    this.lost.textContent = 0;
  }
}
