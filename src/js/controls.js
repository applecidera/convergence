// player controls

const controls = {
  left: {active: false},
  right: {active: false}
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

let clockwise;
let cclockwise;
let cursorSpeed = 3;

function keyDown(e) {;
  switch (e.code) {
    case "ArrowRight":
      if (!controls.right.active){
        controls.right.active = true;
        clockwise = setInterval(() => {
          degrees += cursorSpeed;  
        }, (1000/60) );
      }
      break;
    case "ArrowLeft":
      if (!controls.left.active){
        controls.left.active = true;
        cclockwise = setInterval(() => {
          degrees -= cursorSpeed;  
        }, (1000/60) );
      }
      break;
  }
}

function keyUp(e) {;
  switch (e.code) {
    case "ArrowRight":
      controls.right.active = false;
      clearInterval(clockwise);
      break;
    case "ArrowLeft":
      controls.left.active = false;
      clearInterval(cclockwise);
      break;
  }
}