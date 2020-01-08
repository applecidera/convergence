
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
        // this.clockwise = setInterval(() => {
        //   this.degrees += this.cursorSpeed;  
        // }, (1000/60) );

        // call cursor.moveCursor("clockwise")
      }
      break;
    case "ArrowLeft":
      if (!this.state.left.active){
        this.state.left.active = true;
        // this.cclockwise = setInterval(() => {
        //   this.degrees -= this.cursorSpeed;  
        // }, (1000/60) );
        // call cursor.moveCursor("cclockwise")
      }
      break;
  }
}

Controls.prototype.keyUp = function(e) {
  switch (e.code) {
    case "ArrowRight":
      this.state.right.active = false;
      // clearInterval(this.clockwise);
      break;
    case "ArrowLeft":
      this.state.left.active = false;
      // clearInterval(this.cclockwise);
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