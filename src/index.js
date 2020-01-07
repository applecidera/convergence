import './styles/index.scss';
import Game from './js/game';
import Controls from './js/controls';

// Game Constants
const sunMap = new Image();
const cursor = new Image();
const warpGate1 = new Image();
const warpGate2 = new Image();
const warpGate3 = new Image();
const warpGate = [warpGate1, warpGate2, warpGate3];
let warpGateIndex = 0;
let degrees = 0;

function init() {
  sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
  warpGate1.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
  warpGate2.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
  warpGate3.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';
  window.requestAnimationFrame(draw);
  setInterval(() => {
    warpGateIndex += 1;
    if (warpGateIndex === 3) warpGateIndex = 0;
  }, 500);
}

let DIM_X = 768;
let DIM_Y = 768;

let canvas = document.getElementById('stage');
  
canvas.width = DIM_X;
canvas.height = DIM_Y;
let ctx = canvas.getContext('2d');


function draw() {

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, DIM_X, DIM_Y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(DIM_X/2, DIM_Y/2);

  // Cursor
  ctx.rotate(((2 * Math.PI) / 360) * (controls.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(cursor, 0,-35);

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(DIM_X/2, DIM_Y/2, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(warpGate[warpGateIndex], DIM_X/4 + 97.5, DIM_Y/4 + 97.5,DIM_X/4, DIM_Y/4)
 
  ctx.drawImage(sunMap, 0, 0, DIM_X, DIM_Y);

  window.requestAnimationFrame(draw);
}

const controls = new Controls();
controls.gameOver();

init();