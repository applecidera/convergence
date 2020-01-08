const Controls = require('./controls');
const Cursor = require('./cursor');

// initializer
function Game(context) {
	this.ctx = context;
	this.dim_x = 768;
	this.dim_y = 768;
	this.gameState = false;
	this.sunMap = new Image();
	this.warpGate1 = new Image();
	this.warpGate2 = new Image();
	this.warpGate3 = new Image();
	this.warpGateIndex = 0;
	this.warpGate1.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
	this.warpGate2.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
	this.warpGate3.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';
	this.warpGate = [this.warpGate1, this.warpGate2, this.warpGate3];
	this.sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
	this.warpGateTimer = setInterval(() => {
		this.warpGateIndex += 1;
		if (this.warpGateIndex === 3) this.warpGateIndex = 0;
	}, 500);
}

Game.prototype.logic = function(){
	const {controls, cursor} = this;
	if (controls.state.left.active){
		cursor.moveCursor("cclockwise");
	} else if (controls.state.right.active){
		cursor.moveCursor("clockwise");
	}
}

Game.prototype.draw = function(){
	const { dim_x, dim_y, ctx, warpGate, warpGateIndex, sunMap} = this;
	ctx.clearRect(0, 0, dim_x, dim_y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
	ctx.save();
	
	this.cursor.draw(ctx, dim_x, dim_y)

	this.ctx.restore();

  // Earth orbit
  this.ctx.beginPath();
  this.ctx.arc(dim_x/2, dim_y/2, 105, 0, Math.PI * 2, false); 
	this.ctx.stroke();
	
	// warpgate
	this.ctx.drawImage(warpGate[warpGateIndex], dim_x/4 + 97.5, dim_y/4 + 97.5,dim_x/4, dim_y/4)
	
	// map
  this.ctx.drawImage(sunMap, 0, 0, dim_x, dim_y);

}

Game.prototype.addCursor = function(){
	// or make a variable cursor, add to an "add function that parses by object type so you can add different types of objects?"
	this.cursor = new Cursor();

	return this.cursor;
}

Game.prototype.addControls = function(){
	this.controls = new Controls();

	return this.controls;
}

Game.prototype.startNewGame = function(){
	// initialize constants
}

Game.prototype.gameOver = function(){
	// resets the playfield
}

module.exports = Game;
