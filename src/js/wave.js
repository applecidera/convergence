
import Wall from './walls';

function Wave(pattern, difficulty) {
  this.pattern = pattern
	this.end = false;
  this.subwaveTimer = 0;
  this.currentSubwave = 0;
  this.walls = this.addWalls();
  this.difficulty = difficulty;
}

Wave.prototype.addWalls = function(difficulty) {
  let walls = [];
  const {pattern} = this;

	for (let octant = 0; octant < 8; octant++) {
		if (pattern[octant] === 1) {
			let newWall = new Wall(octant, difficulty);
			walls.push(newWall);
		} else {
			walls.push(null);
		}
	}

	return walls;
};

Wave.prototype.move = function(degrees, game) {
	// TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
	// hitbox logic if any of the walls touch cursor, set gameOver = true
	// actual logic in walls.js
	let gameOver = false;

  for (let i = 0; i < 8; i++) {
    if (this.walls[i] !== null) {
      if (this.walls[i].move(degrees, game)) gameOver = true;
    }
  }

	return gameOver;
};

Wave.prototype.draw = function(ctx) {
	for (let i = 0; i < 8; i++) {
    if (this.walls[i] !== null) {
      this.walls[i].draw(ctx);
    }
	}
};

export default Wave;
