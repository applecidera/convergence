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


const sun = new Image();
const moon = new Image();
const earth = new Image();
let degrees = 0;

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/cursor.png';
  window.requestAnimationFrame(draw);
}

let DIM_X = 768;
let DIM_Y = 768;

function draw() {
  let canvas = document.getElementById('stage');
  
  canvas.width = DIM_X;
  canvas.height = DIM_Y;
  let ctx = canvas.getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, DIM_X, DIM_Y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(DIM_X/2, DIM_Y/2);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(DIM_X/2, DIM_Y/2, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun, 0, 0, DIM_X, DIM_Y);

  window.requestAnimationFrame(draw);
}

init();