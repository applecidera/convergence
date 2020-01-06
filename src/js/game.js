const Triangle = require('./triangle');

function Game(){
  this.triangle = [];
  this.walls = [];
}

Game.DIM_X = 1024;
Game.DIM_Y = 768;

// Game.prototype.allObjects = function() {
//   return [].concat(this.triangle, this.walls)
// }

// Game.prototype.moveObjects = function moveObjects(delta) {
//   this.allObjects().forEach(function(object) {
//     object.move(delta);
//   });
// };

Game.prototype.add = function add(object){
  if (object instanceof Triangle){
    this.triangle.push(object);
  }
}

// Game.prototype.remove = function remove(object){

// }

Game.prototype.addTriangle = function addTriangle() {
  const triangle = new Triangle({
    pos: [500,500],
    game: this
  });


module.exports = Game;