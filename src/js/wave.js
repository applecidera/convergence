
// use require instead of import
const EASY_PATTERNS = require('./patterns');
const Wall = require('./walls')

function Wave(difficulty) {
  this.walls = this.addWalls(difficulty);
  this.end = false;
  this.difficulty = difficulty;
  switch (difficulty) {
    case "easy":
      this.pattern = EASY_PATTERNS[Math.random(Math.floor(EASY_PATTERNS.length))];
      break;
    case "medium":
      this.pattern = MEDIUM_PATTERNS[Math.random(Math.floor(MEDIUM_PATTERNS.length))];
      break;
    case "hard":
      this.pattern = HARD_PATTERNS[Math.random(Math.floor(HARD_PATTERNS.length))];
      break;
  }
}

Wave.prototype.addWalls = function(difficulty){
  let walls = [];
  // FIXME Remove static pattern and make dyamic randomizer
  let pattern = [ 
    [
      [1,1,0,0,1,1,0,0,],
      [0,0,1,1,0,0,1,1],
      [1,1,0,0,1,1,0,0],
      [0,0,1,1,0,0,1,1],
      [1,1,0,0,1,1,0,0]
    ]
  ];

  if (difficulty === "easy"){
    for (let i=0; i<8; i++){
      let newWall = new Wall(i, pattern);
      // let newWall = new Wall(i);
      walls.push(newWall);
    }
  }

  return walls;
}

Wave.prototype.move = function(cursor){
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  // actual logic in walls.js
  let gameOver = false;

  if (this.difficulty === "easy"){
    for (let i=0; i<8; i++){
      if (this.walls[i].move(cursor)) gameOver = true;
    }
  }

  return gameOver;
}

Wave.prototype.draw = function(ctx){
  for (let i=0; i<8; i++){
    this.walls[i].draw(ctx);
  }
}

module.exports = Wave;