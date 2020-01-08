
function Wall(octant){
  this.octant = octant;
  this.sprite = new Image();
  this.sprite.src = "https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png"
  this.speed = 4;
  this.octantLogic(octant);
}

Wall.prototype.octantLogic = function(octant){
  
  switch (octant) {
    case 0:
      // this.sprite = "image goes here"
      this.pos = [0,384];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
    case 1:
      this.pos = [0,0];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
    case 2:
      this.pos = [384,0];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
    case 3:
      this.pos = [768,0];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
    case 4:
      this.pos = [768,384];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
    case 5:
      this.pos = [768,768];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
    case 6:
      this.pos = [384,768];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
    case 7:
      this.pos = [0,768];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
  }
}

Wall.prototype.move = function(){
  // TODO hitbox logic is actually coded here, return true if gameOver
  // may need to pass down degrees from cursor

  let gameOver = false;
  
  let posx = this.pos[0];
  let posy = this.pos[1];
  let dx = 384 - posx;
  let dy = 384 - posy;
  // walls will converge towards center
  if (dx > 0){this.pos[0] += this.speed} else if (dx < 0) {this.pos[0] -= this.speed};
  if (dy > 0){this.pos[1] += this.speed} else if (dy < 0) {this.pos[1] -= this.speed};

  // FIXME 
  if (dx === 0 && dy === 0) gameOver = true;

  return gameOver;
}

Wall.prototype.draw = function(ctx){
  const {pos} = this;
  let x = pos[0];
  let y = pos[1];
  

  // TODO change to sprite with offset based on octant

  ctx.rotate(((2 * Math.PI) / 360) * (this.degreeRotation % 360));
  ctx.drawImage(this.sprite ,x-this.xoffset, y-this.yoffset, 100, 100);
  ctx.rotate(((2 * Math.PI) / 360) * (-this.degreeRotation % 360));
  // ctx.beginPath();
  // ctx.arc(x, y, 50, 0, 2 * Math.PI);
  // ctx.stroke();
  
}



module.exports = Wall;