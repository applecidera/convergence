// use require instead of import
import {
	EASY_PATTERNS,
	MEDIUM_PATTERNS,
	HARD_PATTERNS,
	test
} from './patterns';
import Wall from './walls';

function Wave(difficulty) {
	// console.log(EASY_PATTERNS[Math.floor(Math.random(EASY_PATTERNS.length))]);
	this.end = false;
	this.difficulty = difficulty;
	switch (difficulty) {
		case 'easy':
			// debugger
			this.pattern =
				EASY_PATTERNS[Math.floor(Math.random(EASY_PATTERNS.length))];
			break;
		case 'medium':
			this.pattern =
				MEDIUM_PATTERNS[Math.floor(Math.random(MEDIUM_PATTERNS.length))];
			break;
		case 'hard':
			this.pattern =
				HARD_PATTERNS[Math.floor(Math.random(HARD_PATTERNS.length))];
			break;
	}
	this.walls = this.addWalls(difficulty);
}

Wave.prototype.addWalls = function(difficulty) {
	let walls = [];
	const { pattern } = this;

	// for (let i=0; i<8; i++){
	//   if (pattern[i] === 1){
	//     let newWall = new Wall(i, this.pattern);
	//     walls.push(newWall);
	//   } else {
	//     walls.push(null);
	//   }
	// }

	for (let i = 0; i < 8; i++) {
		let newWall = new Wall(i, this.pattern);
		walls.push(newWall);
	}

	return walls;
};

Wave.prototype.move = function(cursor, game) {
	// TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
	// hitbox logic if any of the walls touch cursor, set gameOver = true
	// actual logic in walls.js
	let gameOver = false;

	if (this.difficulty === 'easy') {
		for (let i = 0; i < 8; i++) {
			if (this.walls[i].move(cursor, game)) gameOver = true;
		}
	}

	return gameOver;
};

Wave.prototype.draw = function(ctx) {
	for (let i = 0; i < 8; i++) {
		this.walls[i].draw(ctx);
	}
};

export default Wave;
