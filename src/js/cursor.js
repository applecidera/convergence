function Cursor(context) {
  this.degrees = -90; 
  this.cursorSpeed = 5;
  this.cursor = new Image();
  this.cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
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

Cursor.prototype.collisionDetect = function(){
  // TODO some sort of hitbox logic
}

Cursor.prototype.draw = function(ctx, dim_x, dim_y){
  ctx.beginPath();
  ctx.translate(dim_x/2, dim_y/2);
  ctx.rotate(((2 * Math.PI) / 360) * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.cursor, 0,-35);
  // console.log(Math.abs(this.degrees % 360));
}

module.exports = Cursor;
