import './styles/index.scss';
import Game from './js/game';
import GameStage from './js/gamestage';

let DIM_X = 768;
let DIM_Y = 768;

let canvas = document.getElementById('stage');
canvas.width = DIM_X;
canvas.height = DIM_Y;
let ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

// Game Constants
const sunMap = new Image();
const cursor = new Image();
const warpGate1 = new Image();
const warpGate2 = new Image();
const warpGate3 = new Image();
const warpGate = [warpGate1, warpGate2, warpGate3];
let warpGateIndex = 0;

sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
warpGate1.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
warpGate2.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
warpGate3.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';

setInterval(() => {
  warpGateIndex += 1;
  if (warpGateIndex === 3) warpGateIndex = 0;
}, 500);

// instantiate game
const game = new Game(ctx);
const gamestage = new GameStage(ctx, game);
gamestage.ticker();