
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

GameStage.prototype.ticker = function(){
  const {frameInterval, setTime} = this;


  //Stepper
  let curTime = Date.now();
  let timeDif = curTime - setTime;

  // skip logic and draw if not time yet
  if (timeDif >= frameInterval){
    this.game.logic(frameInterval);
    this.game.draw();
    this.setTime = curTime;
  }

  window.requestAnimationFrame(this.ticker.bind(this));
}

module.exports = GameStage;