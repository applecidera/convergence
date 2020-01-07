import './styles/index.scss';

// const Game = require('./js/game');
// const ViewPort = require('./js/viewport')

// const canvas = document.getElementById("stage");
// canvas.width = Game.DIM_X;
// canvas.height = Game.DIM_Y;

// const ctx = canvas.getContext("2d");
// const game = new Game();
// new ViewPort(game, ctx).start();
// console.log("hello");


const sunMap = new Image();
const cursor = new Image();
let degrees = 0;

function init() {
  sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/cursor_rotated.png';
  window.requestAnimationFrame(draw);
}

let DIM_X = 768;
let DIM_Y = 768;

let canvas = document.getElementById('stage');
  
canvas.width = DIM_X;
canvas.height = DIM_Y;
let ctx = canvas.getContext('2d');

document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(e.code);
}

function draw() {
  degrees += 2;

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, DIM_X, DIM_Y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(DIM_X/2, DIM_Y/2);

  // Cursor
  
  ctx.rotate(((2 * Math.PI) / 360) * (degrees % 360));
  ctx.translate(85, 0);
  ctx.drawImage(cursor, -12, -12);

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(DIM_X/2, DIM_Y/2, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sunMap, 0, 0, DIM_X, DIM_Y);

  window.requestAnimationFrame(draw);
}

init();