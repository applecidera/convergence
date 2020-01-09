function Wall(octant) {
	this.octant = octant;
	this.sprite = new Image();
	this.speed = 5;
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
			this.hitbox = [ 157.5, 202.5 ];
			break;
		case 1:
			this.pos = [ 0, 0 ];
			this.degreeRotation = -45;
			this.xoffset = -100;
			this.yoffset = 50;
			this.hitbox = [ 202.5, 247.5 ];
			break;
		case 2:
			this.pos = [ 384, 0 ];
			this.degreeRotation = 0;
			this.xoffset = -100;
			this.yoffset = -100;
			this.hitbox = [247.5, 292.5];
			break;
		case 3:
			this.pos = [ 768, 0 ];
			this.degreeRotation = 45;
			this.xoffset = -50;
			this.yoffset = -100;
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
			this.xoffset = 100;
			this.yoffset = -50;
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
			this.xoffset = 50;
			this.yoffset = 100;
			this.hitbox = [ 112.5, 157.5 ];
			break;
	}
};

Wall.prototype.move = function(theta, game) {
	const { hitbox, hitbox2 } = this;
	let gameOver = false;
	let posx = this.pos[0];
	let posy = this.pos[1];
	let distance = Math.sqrt((384 - posx) ** 2 + (384 - posy) ** 2);

	// TODO hitbox logic is actually coded here, return true if gameOver
	// may need to pass down degrees from cursor

  // if (this.octant === 7){
  //   console.log(distance);
  //   console.log(theta);
  // }
  
	if (this.octant === 0 || this.octant === 2 || this.octant === 4 || this.octant === 6) {
		if (
			theta > hitbox[0] &&
			theta < hitbox[1] &&
			distance >= 70 &&
			distance <= 120
		){
      console.log(`angle is ${theta}`);
      console.log(`distance is ${distance}`);
      console.log(`octant is ${this.octant}`);
      console.log("gameover");
      gameOver = true;
    }
  }
  if (this.octant === 1 || this.octant === 3 || this.octant === 5 || this.octant === 7) {
		if (
			theta > hitbox[0] &&
			theta < hitbox[1] &&
			distance >= 140 &&
			distance <= 190
		){
      console.log(`angle is ${theta}`);
      console.log(`distance is ${distance}`);
      console.log(`octant is ${this.octant}`);
      console.log("gameover");
      gameOver = true;
    }
  }
  

	// let radius = 50;
	// // cursor default = (489 , 384)
	// // let curX = radius * Math.sin(theta);
	// // let curY = radius * Math.cos(theta);
	// let curX = ((368+105)*Math.cos(theta))
	// let curY = (-1*(368+105)*Math.sin(theta))
	// let distance = Math.sqrt((curX - posx) ** 2 + (curY - posy) ** 2);

	// if (distance < 100){
	//   debugger
	// }

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

	ctx.translate(x + this.xoffset, y + this.yoffset);
	ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
	ctx.drawImage(
		this.sprite,
		100 / 2,
		100 / 2,
		100,
		100
		// 100 * this.scale,
		// 100 * this.scale
	);
	ctx.rotate(2 * Math.PI / 360 * (-this.degreeRotation % 360));
	ctx.translate(-x - this.xoffset, -y - this.yoffset);
};

module.exports = Wall;
