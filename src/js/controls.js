
// player controls
function Controls(){
  this.degrees = 0;
  this.controls = {
    left: {active: false},
    right: {active: false}
  }
  this.clockwise = 0
  this.cclockwise = 0
  this.cursorSpeed = 3;


  this.disablePlayerControls = this.disablePlayerControls.bind(this);
  this.enablePlayerControls = this.enablePlayerControls.bind(this);
  this.keyDown = this.keyDown.bind(this);
  this.keyUp = this.keyUp.bind(this);
  this.startGame = this.startGame.bind(this);
  this.gameOver = this.gameOver.bind(this);
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
      if (!this.controls.right.active){
        this.controls.right.active = true;
        this.clockwise = setInterval(() => {
          this.degrees += this.cursorSpeed;  
        }, (1000/60) );
      }
      break;
    case "ArrowLeft":
      if (!this.controls.left.active){
        this.controls.left.active = true;
        this.cclockwise = setInterval(() => {
          this.degrees -= this.cursorSpeed;  
        }, (1000/60) );
      }
      break;
  }
}

Controls.prototype.keyUp = function(e) {
  switch (e.code) {
    case "ArrowRight":
      this.controls.right.active = false;
      clearInterval(this.clockwise);
      break;
    case "ArrowLeft":
      this.controls.left.active = false;
      clearInterval(this.cclockwise);
      break;
  }
}

Controls.prototype.startGame = function(e) {
  if (e.code === "Space") this.enablePlayerControls();
  clearInterval(this.clockwise);
}

Controls.prototype.gameOver = function() {
  this.disablePlayerControls();
  this.clockwise = setInterval(() => {
    this.degrees += this.cursorSpeed / 2;  
  }, (1000/60) );
}

module.exports = Controls;