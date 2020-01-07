// import Controls from './controls';
const Controls = require('./controls');

function GameStage (context, game) {
  this.ctx = context;
  this.game = game;
  this.controls = new Controls();
  this.frameRate = 60;
  this.frameInterval = 1000/this.frameRate;
  this.controls.gameOver();
}

GameStage.prototype.ticker = function(){
	// draws stuff in set intervals
  this.ctx.clearRect(0, 0, this.dim_x, this.dim_y); // clear canvas

  this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  this.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  this.ctx.save();
  this.ctx.translate(this.dim_x/2, this.dim_y/2);

  // Cursor
  this.ctx.rotate(((2 * Math.PI) / 360) * (this.controls.degrees % 360));
  this.ctx.translate(105, 0);
  this.ctx.drawImage(cursor, 0,-35);

  this.ctx.restore();
  
  this.ctx.beginPath();
  this.ctx.arc(this.dim_x/2, this.dim_y/2, 105, 0, Math.PI * 2, false); // Earth orbit
  this.ctx.stroke();

	// warpgate
  this.ctx.drawImage(warpGate[warpGateIndex], this.dim_x/4 + 97.5, this.dim_y/4 + 97.5,this.dim_x/4, this.dim_y/4)
 
	// map
  this.ctx.drawImage(sunMap, 0, 0, this.dim_x, this.dim_y);

  window.requestAnimationFrame(ticker);
}

module.exports = GameStage;