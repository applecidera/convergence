function Wall(octant, difficulty) {
	this.octant = octant;
	this.sprite = new Image();
	this.scale = 4;
	// this.speed = 8;
  // this.descaleFactor = 0.08;
  this.difficulty;
	this.sprite.src =
		'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png';
	if (difficulty === 'easy') {
		this.speed = 8;
		this.descaleFactor = 0.08;
	} else if (difficulty === 'medium') {
		this.speed = 9;
		this.descaleFactor = 0.09;
	} else if (difficulty === 'hard') {
		this.speed = 10;
		this.descaleFactor = 0.1;
	}

	this.octantLogic(octant);
}

Wall.prototype.octantLogic = function(octant) {
	switch (octant) {
		case 0:
			this.pos = [ 0, 384 ];
			this.degreeRotation = -90;
			this.xoffset = -100;
			this.yoffset = 100;
			this.hitbox = [ 157.5, 202.5 ];
			break;
		case 1:
			this.pos = [ 0, 0 ];
			this.degreeRotation = -45;
			this.xoffset = -120;
			this.yoffset = 30;
			this.hitbox = [ 202.5, 247.5 ];
			break;
		case 2:
			this.pos = [ 384, 0 ];
			this.degreeRotation = 0;
			this.xoffset = -100;
			this.yoffset = -100;
			this.hitbox = [ 247.5, 292.5 ];
			break;
		case 3:
			this.pos = [ 768, 0 ];
			this.degreeRotation = 45;
			this.xoffset = -30;
			this.yoffset = -120;
			this.hitbox = [ 297.5, 336.5 ];
			break;
		case 4:
			this.pos = [ 768, 384 ];
			this.degreeRotation = 90;
			this.xoffset = 100;
			this.yoffset = -100;
			this.hitbox = [ 336.5, 360 ];
			this.hitbox2 = [ 0, 22.5 ];
			break;
		case 5:
			this.pos = [ 768, 768 ];
			this.degreeRotation = 135;
			this.xoffset = 120;
			this.yoffset = -30;
			this.hitbox = [ 22.5, 67.5 ];
			break;
		case 6:
			this.pos = [ 384, 768 ];
			this.degreeRotation = 180;
			this.xoffset = 100;
			this.yoffset = 100;
			this.hitbox = [ 67.5, 112.5 ];
			break;
		case 7:
			this.pos = [ 0, 768 ];
			this.degreeRotation = 225;
			this.xoffset = 30;
			this.yoffset = 120;
			this.hitbox = [ 112.5, 157.5 ];
			break;
	}
};

Wall.prototype.move = function(theta) {
	const { hitbox, hitbox2 } = this;
	let gameOver = false;
	let posx = this.pos[0];
	let posy = this.pos[1];
  let distance = Math.sqrt((384 - posx) ** 2 + (384 - posy) ** 2);

	if (this.octant === 0 || this.octant === 2 || this.octant === 6) {
		if (
			theta > hitbox[0] &&
			theta < hitbox[1] &&
			distance >= 70 &&
			distance <= 120
		) {
			gameOver = true;
		}
	}
	if (this.octant === 4) {
		if (
			(theta > hitbox[0] &&
				theta < hitbox[1] &&
				distance >= 70 &&
				distance <= 120) ||
			(theta > hitbox2[0] &&
				theta < hitbox2[1] &&
				distance >= 70 &&
				distance <= 120)
		) {
			gameOver = true;
		}
	}
	if (
		this.octant === 1 ||
		this.octant === 3 ||
		this.octant === 5 ||
		this.octant === 7
	) {
		if (
			theta > hitbox[0] &&
			theta < hitbox[1] &&
			distance >= 120 &&
			distance <= 170
		) {
			gameOver = true;
		}
	}

	let dx = 384 - posx;
	let dy = 384 - posy;
	// walls will converge towards center
	if (dx > 0) {
		this.pos[0] += this.speed;
	} else if (dx < 0) {
		this.pos[0] -= this.speed;
	}
	if (dy > 0) {
		this.pos[1] += this.speed;
	} else if (dy < 0) {
		this.pos[1] -= this.speed;
	}

	return gameOver;
};

Wall.prototype.draw = function(ctx) {
	const { pos } = this;
	let x = pos[0];
	let y = pos[1];
	if (this.scale > 1 + this.descaleFactor) this.scale -= this.descaleFactor;

	ctx.translate(x + this.xoffset * this.scale, y + this.yoffset * this.scale);
	ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
	ctx.drawImage(
		this.sprite,
		100 * this.scale / 2,
		100 * this.scale / 2,
		100 * this.scale,
		100 * this.scale
	);
	ctx.rotate(2 * Math.PI / 360 * (-this.degreeRotation % 360));
	ctx.translate(-x - this.xoffset * this.scale, -y - this.yoffset * this.scale);
};

module.exports = Wall;
