function Wall(octant) {
	this.octant = octant;
	this.sprite = new Image();
	this.speed = 4;
	this.scale = 4;
	this.sprite.src =
		'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png';
	this.octantLogic(octant);
}

Wall.prototype.octantLogic = function(octant) {
	switch (octant) {
		case 0:
			this.pos = [ 0, 384 ];
			this.degreeRotation = -90;
			this.xoffset = -100;
			this.yoffset = 100;
			break;
		case 1:
			this.pos = [ 0, 0 ];
			this.degreeRotation = -45;
			this.xoffset = -100;
			this.yoffset = 50;
			break;
		case 2:
			this.pos = [ 384, 0 ];
			this.degreeRotation = 0;
			this.xoffset = -100;
			this.yoffset = -100;
			break;
		case 3:
			this.pos = [ 768, 0 ];
			this.degreeRotation = 45;
			this.xoffset = -50;
			this.yoffset = -100;
			break;
		case 4:
			this.pos = [ 768, 384 ];
			this.degreeRotation = 90;
			this.xoffset = 100;
			this.yoffset = -100;
			break;
		case 5:
			this.pos = [ 768, 768 ];
			this.degreeRotation = 135;
			this.xoffset = 100;
			this.yoffset = -50;
			break;
		case 6:
			this.pos = [ 384, 768 ];
			this.degreeRotation = 180;
			this.xoffset = 100;
			this.yoffset = 100;
			break;
		case 7:
			this.pos = [ 0, 768 ];
			this.degreeRotation = 225;
			this.xoffset = 50;
			this.yoffset = 100;
			break;
	}
};

Wall.prototype.move = function(cursor, game) {
	// TODO hitbox logic is actually coded here, return true if gameOver
	// may need to pass down degrees from cursor

	let gameOver = false;

	let posx = this.pos[0];
	let posy = this.pos[1];
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
  if (this.scale > 1.01) this.scale -= 0.04;

	ctx.translate(x + (this.xoffset), y + this.yoffset);
	ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
	ctx.drawImage(
		this.sprite,
		(100 / 2) ,
    (100 / 2) ,
    100 ,
		100 
		// 100 * this.scale,
		// 100 * this.scale
	);
	ctx.rotate(2 * Math.PI / 360 * (-this.degreeRotation % 360));
	ctx.translate(-x - this.xoffset, -y - this.yoffset);
};

module.exports = Wall;
