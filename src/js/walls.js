
function Wall(options){
  this.qudrant = options.qudrant;
  this.pos = options.pos
}

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

module.exports = Wall;