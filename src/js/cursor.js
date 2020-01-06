function Cursor(options) {
	this.game = options.game;
	this.pos = [ this.game.DIM_X / 2, this.game.DIM_Y / 2 ];
  this.color = '#000000';
  this.radius = 15;
}

Cursor.prototype.draw = function draw(ctx) {
	ctx.fillStyle = this.color;

	ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  ctx.fill();
};

module.exports = Cursor;
