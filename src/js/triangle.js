function Triangle(){
  this.dimensions = options.dimensions;
  this.game = options.game;
  this.pos = [this.game.DIM_X / 2, this.game.DIM_Y / 2];
  this.color = "#000000";
};

Triangle.prototype.draw = function draw(ctx){
  ctx.fillStyle = this.color;

  ctx.beginPath(this.game.DIM_X, this.game.DIM_Y);
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}

module.exports = Triangle;