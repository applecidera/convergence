import './styles/index.scss';
import Game from './js/game';
import GameStage from './js/gamestage';



let canvas = document.getElementById('stage');
canvas.width = 768;
canvas.height = 768;
let ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

// instantiate game
const game = new Game(ctx);
const gamestage = new GameStage(ctx, game);
gamestage.ticker();