const Controls = require('./controls');
const Cursor = require('./cursor');

// initializer
function Game(context) {
	this.ctx = context;
	this.dim_x = 768;
	this.dim_y = 768;
	this.elapsedTime = 0;
	this.waves = [];
	this.waveInterval = 0;
	this.difficulty = "easy";
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

Game.prototype.logic = function(frameInterval){
	const {controls, cursor} = this;
	if (controls.state.left.active){
		cursor.moveCursor("cclockwise");
	} else if (controls.state.right.active){
		cursor.moveCursor("clockwise");
	}

	// TODO uncomment when finished
	// this.waveLogic(frameInterval);
	// this.waveMovement();
}

Game.prototype.draw = function(){
	const { dim_x, dim_y, ctx, warpGate, warpGateIndex, sunMap} = this;
	ctx.clearRect(0, 0, dim_x, dim_y); // clear canvas

  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'blue';
	ctx.save();

	// Cursor
	this.cursor.draw(ctx, dim_x, dim_y)

	this.ctx.restore();

	// Waves
	// this.waves.forEach((wave){
	// 	wave.draw();
	// })

  // Earth orbit
  this.ctx.beginPath();
  this.ctx.arc(dim_x/2, dim_y/2, 105, 0, Math.PI * 2, false); 
	this.ctx.stroke();
	
	// Warpgate
	this.ctx.drawImage(warpGate[warpGateIndex], dim_x/4 + 97.5, dim_y/4 + 97.5,dim_x/4, dim_y/4)
	
	// Map
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

Game.prototype.addWave = function(frameInterval){
	const {elapsedTime, waveInterval} = this;
	if (elapsedTime > waveInterval){
		// TODO launch next wave
		let newWave = new Wave(this.difficulty);
		this.waves.push(newWave);
		this.elapsedTime = 0;
		// TODO create new waveInterval based on difficulty
		this.waveInterval = 10 * 1000;
	} else {

	}

	// increment elapsedTime
	this.elapsedTime += frameInterval;
}

Game.prototype.removeWave = function(){
	const {waves} = this;
	waves.forEach((wave)=>{
		wave.remove();
	})
}

Game.prototype.waveLogic = function(){
	this.addWave(frameInterval);

	const {waves} = this;
	waves.forEach((wave)=>{
		wave.move();
	})
}

Game.prototype.timer = function(){

}

Game.prototype.startNewGame = function(){
	this.elapsedTime = 0;
	this.waves = [];
}

Game.prototype.gameOver = function(){
	// resets the playfield
}

module.exports = Game;
