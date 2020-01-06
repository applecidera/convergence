function ViewPort(game, ctx){
  this.ctx = ctx;
  this.game = game;
  this.triangle = this.game.addTriangle();
}

GameView.prototype.start = function start() {
  this.bindKeyHandlers();
  this.lastTime = 0;
  
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;

  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;

  requestAnimationFrame(this.animate.bind(this));
};

module.exports = ViewPort;