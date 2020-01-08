
// player controls
function Controls(game){
  this.game = game;
  this.degrees = 0;
  this.state = {
    left: {active: false},
    right: {active: false}
  }
  this.disablePlayerControls = this.disablePlayerControls.bind(this);
  this.enablePlayerControls = this.enablePlayerControls.bind(this);
  this.keyDown = this.keyDown.bind(this);
  this.keyUp = this.keyUp.bind(this);
  this.startGame = this.startGame.bind(this);
  this.gameOver = this.gameOver.bind(this);
  this.bigLogo = document.getElementsByClassName("start-game-logo");
  // this.bigLogo[0].classList.remove("start-game-logo");
  this.smallLogo = document.getElementsByClassName("title-box");
  // this.smallLogo[0].classList.remove("title-box-fade-out");
  this.gameInfo = document.getElementsByClassName("start-game-info");
}

Controls.prototype.enablePlayerControls = function(){
  document.removeEventListener('keydown', this.startGame);
  
  document.addEventListener('keydown', this.keyDown);
  document.addEventListener('keyup', this.keyUp);
}

Controls.prototype.disablePlayerControls = function(){
  document.removeEventListener('keydown', this.keyDown);
  document.removeEventListener('keyup', this.keyUp);

  document.addEventListener('keydown', this.startGame);
}

Controls.prototype.keyDown = function(e) {
  switch (e.code) {
    case "ArrowRight":
      if (!this.state.right.active){
        this.state.right.active = true;
      }
      break;
    case "ArrowLeft":
      if (!this.state.left.active){
        this.state.left.active = true;
      }
      break;
  }
}

Controls.prototype.keyUp = function(e) {
  switch (e.code) {
    case "ArrowRight":
      this.state.right.active = false;
      break;
    case "ArrowLeft":
      this.state.left.active = false;
      break;
  }
}

Controls.prototype.startGame = function(e) {
  if (e.code === "Space") this.enablePlayerControls();
  this.game.startNewGame();
  this.bigLogo[0].classList.remove("start-game-logo-fade-in");
  this.bigLogo[0].classList.add("start-game-logo-fade-out");
  this.smallLogo[0].classList.remove("title-box-fade-in");
  this.smallLogo[0].classList.add("title-box-fade-out");
  this.gameInfo[0].classList.remove("start-game-info-fade-in");
  this.gameInfo[0].classList.add("start-game-info-fade-out");
}

Controls.prototype.gameOver = function() {
  this.disablePlayerControls();
  this.game.gameOver();
  this.bigLogo[0].classList.remove("start-game-logo-fade-out");
  this.bigLogo[0].classList.add("start-game-logo-fade-in");
  this.smallLogo[0].classList.remove("title-box-fade-out");
  this.smallLogo[0].classList.add("title-box-fade-in");
  this.gameInfo[0].classList.remove("start-game-info-fade-out");
  this.gameInfo[0].classList.add("start-game-info-fade-in");
}

module.exports = Controls;