import Wall from './walls';

class Wave {
	constructor(pattern, difficulty) {
		this.pattern = pattern;
		this.end = false;
		this.subwaveTimer = 0;
		this.currentSubwave = 0;
		this.walls = this.addWalls(difficulty);
		this.difficulty = difficulty;
	}

	addWalls(difficulty) {
		let walls = [];
		const { pattern } = this;

		for (let octant = 0; octant < 8; octant++) {
			if (pattern[octant] === 1) {
				let newWall = new Wall(octant, difficulty);
				walls.push(newWall);
			} else {
				walls.push(null);
			}
		}

		return walls;
	}

	move(degrees, game) {
		// hitbox logic if any of the walls touch cursor, set gameOver = true
		let gameOver = false;

		for (let i = 0; i < 8; i++) {
			if (this.walls[i] !== null) {
				if (this.walls[i].move(degrees, game)) gameOver = true;
			}
		}

		return gameOver;
	}

	draw(ctx) {
		for (let i = 0; i < 8; i++) {
			if (this.walls[i] !== null) {
				this.walls[i].draw(ctx);
			}
		}
	}
}

export default Wave;
