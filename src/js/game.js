const Cursor = require('./cursor');

function Game() {
	this.cursor = [];
	this.walls = [];
}

Game.DIM_X = 1024;
Game.DIM_Y = 768;

Game.prototype.allObjects = function() {
  return [].concat(this.cursor, this.walls)
}

Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects().forEach(function(object) {
    object.move(delta);
  });
};

Game.prototype.add = function add(object) {
	if (object instanceof Cursor) {
		this.cursor.push(object);
	}
};

// Game.prototype.remove = function remove(object){

// }

Game.prototype.addCursor = function addCursor() {
	const cursor = new Cursor({
		pos: [ Game.DIM_X / 2, Game.DIM_Y / 2 ],
		game: this
	});
};

Game.prototype.draw = function draw(ctx){
  this.allObjects().forEach((object)=>{
    object.draw(ctx);
  });
}

Game.prototype.step = function step(delta){
  this.moveObjects(delta);
}

module.exports = Game;
