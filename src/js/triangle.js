function Triangle(options){
  this.game = options.game;
  this.pos = [this.game.DIM_X / 2, this.game.DIM_Y / 2];
  this.radius = option.radius || 50;
  this.color = "#000000";
  this.direction = 0;
  this.angle = 30;
};

Triangle.prototype.draw = function draw(ctx){
  ctx.fillStyle = this.color;

  ctx.beginPath();
  ctx.moveTo(this.game.DIM_X + 75, this.game.DIM_Y + 50);
  ctx.lineTo(this.game.DIM_X + 100, this.game.DIM_X + 75);
  ctx.lineTo(this.game.DIM_X + 100, this.game.DIM_X + 25);
  ctx.fill();
}

module.exports = Triangle;