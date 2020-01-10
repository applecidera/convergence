function Cursor(context) {
  this.degrees = 270; 
  this.cursorSpeed = 10;
  this.cursor = new Image();
  this.deadCursor = new Image();
  this.explosion = new Image();
  this.explosionFrame = 0;
  this.cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
  this.deadCursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_green_small_2.png';
  this.explosion.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/explosion_spritesheet.png';
}

Cursor.prototype.moveCursor = function(direction){
  switch (direction) {
    case "clockwise":
      this.degrees += this.cursorSpeed;  
      break;
  
    case "cclockwise":
      this.degrees -= this.cursorSpeed;  
      break;
  }
}

Cursor.prototype.draw = function(ctx){
  ctx.save();
  ctx.translate(768/2, 768/2);
  ctx.rotate(((2 * Math.PI) / 360) * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.cursor, 0,-35);
  ctx.restore();
}

Cursor.prototype.explosionAnimation = function(ctx) {

  if (this.explosionFrame <= 70){  
    const x1 = EXPLOSION_POSITION[this.explosionFrame][0];
    const y1 = EXPLOSION_POSITION[this.explosionFrame][1];
    const x2 = EXPLOSION_POSITION[this.explosionFrame][2];
    const y2 = EXPLOSION_POSITION[this.explosionFrame][3];

    ctx.save();
    ctx.translate(768/2, 768/2);
    ctx.rotate(((2 * Math.PI) / 360) * (this.degrees % 360));
    ctx.translate(105, 0);
    ctx.drawImage(this.explosion, x1, y1, x2, y2, -50, -75, 150, 150);
    ctx.restore();

    this.explosionFrame++;
  }

  ctx.save();
  ctx.translate(768/2, 768/2);
  ctx.rotate(((2 * Math.PI) / 360) * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.deadCursor, 0,-35);
  ctx.restore();
  
}

const EXPLOSION_POSITION = [
[0, 0 ,100, 100],
[100, 0 ,100, 100],
[200, 0 ,100, 100],
[300, 0 ,100, 100],
[400, 0 ,100, 100],
[500, 0 ,100, 100],
[600, 0 ,100, 100],
[700, 0 ,100, 100],
[800, 0 ,100, 100],
[900, 0 ,100, 100],
[0, 100 ,100, 100],
[100, 100 ,100, 100],
[200, 100 ,100, 100],
[300, 100 ,100, 100],
[400, 100 ,100, 100],
[500, 100 ,100, 100],
[600, 100 ,100, 100],
[700, 100 ,100, 100],
[800, 100 ,100, 100],
[900, 100 ,100, 100],
[0, 200 ,100, 100],
[100, 200 ,100, 100],
[200, 200 ,100, 100],
[300, 200 ,100, 100],
[400, 200 ,100, 100],
[500, 200 ,100, 100],
[600, 200 ,100, 100],
[700, 200 ,100, 100],
[800, 200 ,100, 100],
[900, 200 ,100, 100],
[0, 300 ,100, 100],
[100, 300 ,100, 100],
[200, 300 ,100, 100],
[300, 300 ,100, 100],
[400, 300 ,100, 100],
[500, 300 ,100, 100],
[600, 300 ,100, 100],
[700, 300 ,100, 100],
[800, 300 ,100, 100],
[900, 300 ,100, 100],
[0, 400 ,100, 100],
[100, 400 ,100, 100],
[200, 400 ,100, 100],
[300, 400 ,100, 100],
[400, 400 ,100, 100],
[500, 400 ,100, 100],
[600, 400 ,100, 100],
[700, 400 ,100, 100],
[800, 400 ,100, 100],
[900, 400 ,100, 100],
[0, 500 ,100, 100],
[100, 500 ,100, 100],
[200, 500 ,100, 100],
[300, 500 ,100, 100],
[400, 500 ,100, 100],
[500, 500 ,100, 100],
[600, 500 ,100, 100],
[700, 500 ,100, 100],
[800, 500 ,100, 100],
[900, 500 ,100, 100],
[0, 600 ,100, 100],
[100, 600 ,100, 100],
[200, 600 ,100, 100],
[300, 600 ,100, 100],
[400, 600 ,100, 100],
[500, 600 ,100, 100],
[600, 600 ,100, 100],
[700, 600 ,100, 100],
[800, 600 ,100, 100],
[900, 600 ,100, 100],
[0, 700 ,100, 100]
]

module.exports = Cursor;
