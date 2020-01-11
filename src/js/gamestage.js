import Game from './game';

class GameStage {
	constructor(context, game) {
		this.ctx = context;
		this.game = game;
		this.frameRate = 60;
		this.frameInterval = 1000 / this.frameRate;
		this.setTime = 0;
		this.cursor = this.game.addCursor();
		this.controls = this.game.addControls();
		this.loadScreen = true;
    this.controls.gameOver();
	}

	ticker(time) {
		const { frameInterval, setTime } = this;

		// frame limiter
		let curTime = time;
		let timeDif = curTime - setTime;

		// draw frame
		if (timeDif >= frameInterval) {
			this.game.logic(frameInterval);
			this.game.draw();
			this.setTime = curTime;
		}

		window.requestAnimationFrame(this.ticker.bind(this));
	}

	// loopMusic() {
		
	// 	audio.addEventListener(
	// 		'ended',
	// 		() => {
	// 			audio.currentTime = 0;
	// 			audio.play();
	// 		},
	// 		false
	// 	);
	// 	// audio.play();
	// }
}

export default GameStage;
