function Cursor(context) {
  this.degrees = 270; 
  this.cursorSpeed = 10;
  this.cursor = new Image();
  this.deadCursor = new Image();
  this.explosion = new Image();
  this.explosionFrame = 0;
  this.x1 = 0;
  this.y1 = 0;
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
    ctx.save();
    ctx.translate(768/2, 768/2);
    ctx.rotate(((2 * Math.PI) / 360) * (this.degrees % 360));
    ctx.translate(105, 0);
    ctx.drawImage(this.explosion, this.x1, this.y1, 100, 100, -50, -75, 150, 150);
    ctx.restore();

    this.explosionFrame++;

    this.x1 += 100;
    if (this.x1 === 1000){
      this.y1 += 100;
      this.x1 = 0;
    }

    if (this.explosionFrame === 71){
      this.x1 = 0;
      this.y1 = 0;
    }
  }

  ctx.save();
  ctx.translate(768/2, 768/2);
  ctx.rotate(((2 * Math.PI) / 360) * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.deadCursor, 0,-35);
  ctx.restore();
  
}

Cursor.prototype.reset = function(){
  this.explosionFrame = 0;
	this.x1 = 0;
	this.y1 = 0;
}

module.exports = Cursor;
