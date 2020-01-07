
// initializer
function Game(context) {
	this.ctx = context;
	this.dim_x = 768;
	this.dim_y = 768;
	this.gameState = false;
}

Game.prototype.startNewGame = function(){
	// 
}

Game.prototype.gameOver = function(){
	// resets the playfield
}

module.exports = Game;
