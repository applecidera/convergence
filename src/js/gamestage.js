import Game from "./game";

function GameStage (context, game) {
  this.ctx = context;
  this.game = game;
  this.frameRate = 60;
  this.frameInterval = 1000/this.frameRate;
  this.setTime = 0;
  this.cursor = this.game.addCursor();
  this.controls = this.game.addControls();
  this.controls.gameOver();
}

GameStage.prototype.ticker = function(time){
  const {frameInterval, setTime} = this;


  // time-limit
  let curTime = time;
  let timeDif = curTime - setTime;

  // frame limiter
  if (timeDif >= frameInterval && !this.game.isGameOver){
    this.game.logic(frameInterval);
    this.game.draw();
    this.setTime = curTime;
  }

  window.requestAnimationFrame(this.ticker.bind(this));
}

export default GameStage;