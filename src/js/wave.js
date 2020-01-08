import {EASY_PATTERNS, MEDIUM_PATTERNS, HARD_PATTERNS} from './patterns';

function Wave(difficulty) {
  this.walls = this.addWalls(difficulty);
  this.end = false;
  this.difficulty=difficulty;
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

  if (difficulty === "easy"){
    for (let i=0; i<8; i++){
      let newWall = new Wall(i, pattern);
      walls.push(newWall);
    }
  }

  return walls;
}

Wave.prototype.move = function(){
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  let gameOver = false;

  if (difficulty === "easy"){
    for (let i=0; i<8; i++){
      if (this.walls[i].move()) gameOver = true;
    }
  }

  return gameOver;
}

Wave.prototype.draw = function(){

  if (difficulty === "easy"){
    for (let i=0; i<8; i++){
      let newWall = new Wall(i, pattern);
      walls.push(newWall);
    }
  }

  return walls;
}

module.exports = Wave;