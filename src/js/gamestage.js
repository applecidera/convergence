import Game from "./game";

function GameStage (context, game) {
  this.ctx = context;
  this.game = game;
  this.frameRate = 60;
  this.frameInterval = 1000/this.frameRate;
  this.setTime = 0;
  this.cursor = this.game.addCursor();
  this.controls = this.game.addControls();
  this.loadScreen = true;
  this.controls.gameOver();
}

GameStage.prototype.ticker = function(time){
  const {frameInterval, setTime} = this;

  // frame limiter
  let curTime = time;
  let timeDif = curTime - setTime;

  // draw frame
  if (timeDif >= frameInterval){
    this.game.logic(frameInterval);
    this.game.draw();
    this.setTime = curTime;
  }

  window.requestAnimationFrame(this.ticker.bind(this));
}

const audio = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/Megalovania.mp3');
audio.addEventListener('ended', ()=>{
  audio.currentTime = 0;
  audio.play()
}, false);
audio.play();

export default GameStage;