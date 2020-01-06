import './styles/index.scss';

const Game = require('./js/game');
const ViewPort = require('./js/viewport')

const canvas = document.getElementById("viewport");
canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;

const ctx = canvas.getContext("2d");
const game = new Game();
// new ViewPort(game, ctx).start();
