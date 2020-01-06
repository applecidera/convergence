const Triangle = require('./triangle');

function Game(){
  this.triangle = [];
  this.walls = [];
}

Game.DIM_X = 1024;
Game.DIM_Y = 768;

Game.prototype.allObjects = function() {
  return [].concat(this.triangle, this.walls)
}

// Game.prototype.add = function add(object){
//   switch (object){
//     case (object instanceof Triangle):
//       this.triangle.push(object); // adds Triangle to the game
//       break;
//   }
// }

// Game.prototype.addTriangle = function addTriangle() {
//   const triangle = new Triangle({
//     pos: [500,500],
//     game: this
//   });

//   this.add(triangle);

//   return triangle;
// }

module.exports = Game;