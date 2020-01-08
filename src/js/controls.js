
// player controls
function Controls(){
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
  // this.bigLogo = document.getElementsByClassName("start-game-logo");
  // this.smallLogo = document.getElementsByClassName("title-box");
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
  // this.bigLogo.classList.remove("start-game-logo-fade-in");
  // this.bigLogo.classList.add("start-game-logo-fade-out");
  // this.smallLogo.classList.remove("title-box-fade-in");
  // this.smallLogo.classList.add("title-box-fade-out");
}

Controls.prototype.gameOver = function() {
  this.disablePlayerControls();
  // this.bigLogo.classList.remove("start-game-logo-fade-out");
  // this.bigLogo.classList.add("start-game-logo-fade-in");
  // this.smallLogo.classList.remove("title-box-fade-out");
  // this.smallLogo.classList.add("title-box-fade-in");
}

module.exports = Controls;