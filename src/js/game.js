import Controls from './controls';
import Cursor from './cursor';
import Wave from './wave';
import * as Firebase_API from './firebase';
import { EASY_PATTERNS, MEDIUM_PATTERNS, HARD_PATTERNS } from './patterns';

class Game {
	constructor(context) {
		this.ctx = context;
		this.dim_x = 768;
		this.dim_y = 768;
		this.highScores = [999];
		this.highScoreBox = document.getElementsByClassName('high-score-form');
		this.highScoreInputField = document.getElementsByClassName(
			'high-score-input-field'
		);
		this.highScoreList = document.getElementsByClassName('current-highest-scores');
		document.addEventListener('submit', this.addHighScore.bind(this));
		this.audio = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/Megalovania.mp3');

		this.isGameOver = true;
		this.totalTimeElapsed = 0;
		this.subwaveTimer = 0;
		this.subWaveInterval = 2;
		this.waves = [];
		this.patternList = [];
		this.difficulty = 'easy';
		this.rotation = -30;
		this.rotationSpeed = 0.1;
		this.newHighScore = false;
		this.deadShip = false;

		this.sunMap = new Image();
		this.staticMap = new Image();
		this.warpGate1 = new Image();
		this.warpGate2 = new Image();
		this.warpGate3 = new Image();
		this.warpGateIndex = 0;
		this.warpGate1.src =
			'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
		this.warpGate2.src =
			'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
		this.warpGate3.src =
			'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';
		this.warpGate = [ this.warpGate1, this.warpGate2, this.warpGate3 ];
		this.sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
		this.warpGateTimer = setInterval(() => {
			this.warpGateIndex += 1;
			if (this.warpGateIndex === 3) this.warpGateIndex = 0;
		}, 500);
		this.timer = document.getElementsByClassName('timer');

		Firebase_API.fetchHighScores(this.populateHighScores.bind(this));
	}

	logic(frameInterval) {
		if (!this.isGameOver) {
			const { controls, cursor } = this;
			if (controls.state.left.active) {
				cursor.moveCursor('cclockwise');
			} else if (controls.state.right.active) {
				cursor.moveCursor('clockwise');
			}

			if (this.totalTimeElapsed > 9.5 * 1000) {
				this.difficulty = 'medium';
			}
			if (this.totalTimeElapsed > 19.5 * 1000) {
				this.difficulty = 'hard';
			}

			this.timerCounter(frameInterval);

			this.waveLogic(frameInterval);
		}
	}

	draw() {
		const { dim_x, dim_y, ctx, warpGate, warpGateIndex, sunMap } = this;
		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0); // resets transform to clear entire cavas
		ctx.clearRect(-256, -256, dim_x + 256, dim_y + 256); // clear canvas
		ctx.restore();
		if (!this.isGameOver) {
			this.rotation += this.rotationSpeed;
		}

		ctx.translate(768 / 2, 768 / 2);
		ctx.rotate(2 * Math.PI / 360 * (this.rotation / 360));
		ctx.translate(-768 / 2, -768 / 2);

		ctx.fillStyle = 'blue';
		ctx.strokeStyle = 'blue';

		// Cursor
		if (!this.deadShip) {
			this.cursor.draw(ctx);
		} else {
			this.cursor.explosionAnimation(ctx);
		}

		// Waves
		this.waves.forEach((wave) => {
			wave.draw(ctx);
		});

		// Earth orbit
		this.ctx.beginPath();
		this.ctx.arc(dim_x / 2, dim_y / 2, 105, 0, Math.PI * 2, false);
		this.ctx.stroke();

		// Warpgate
		this.ctx.drawImage(
			warpGate[warpGateIndex],
			dim_x / 4 + 97.5,
			dim_y / 4 + 97.5,
			dim_x / 4,
			dim_y / 4
		);

		// Map
		this.ctx.drawImage(sunMap, 0, 0, dim_x, dim_y);
	}

	addCursor() {
		this.cursor = new Cursor();
		return this.cursor;
	}

	addControls() {
		this.controls = new Controls(this);
		return this.controls;
	}

	addWave(frameInterval) {
		const { difficulty } = this;

		// launch wave every x seconds
		if (
			this.subwaveTimer > this.subWaveInterval * 1000 ||
			this.totalTimeElapsed === frameInterval
		) {
			// if patternList is empty, add more patterns to patternList
			if (this.patternList.length === 0) {
				switch (difficulty) {
					case 'easy':
						this.patternList = this.patternList.concat(
							EASY_PATTERNS[Math.floor(Math.random() * EASY_PATTERNS.length)]
						);
						this.subWaveInterval = 1;
						break;
					case 'medium':
						this.patternList = this.patternList.concat(
							MEDIUM_PATTERNS[
								Math.floor(Math.random() * MEDIUM_PATTERNS.length)
							]
						);
						this.subWaveInterval = 0.75;
						break;
					case 'hard':
						this.patternList = this.patternList.concat(
							HARD_PATTERNS[Math.floor(Math.random() * HARD_PATTERNS.length)]
						);
						this.subWaveInterval = 0.5;
						break;
				}
			}
			// this stuff runs at set intervals (2s)
			this.pattern = this.patternList.shift();
			let newWave = new Wave(this.pattern, this.difficulty);
			this.waves.push(newWave);
			this.subwaveTimer = 0;
		}
		// runs regardless of timer
		this.subwaveTimer += frameInterval;
	}

	removeWave() {
		const { waves } = this;
		const removeDistance = 60;
		// shifts off wave in FIFO
		if (waves[0] !== undefined) {
			for (let i = 0; i < 8; i++) {
				if (waves[0].walls[i] !== null) {
					let x1 = waves[0].walls[i].pos[0];
					let y1 = waves[0].walls[i].pos[1];
					let distance = Math.sqrt((384 - x1) ** 2 + (384 - y1) ** 2);
					if (distance < removeDistance) {
						this.waves.shift();
						break;
					}
				}
			}
		}
	}

	waveLogic(frameInterval) {
		this.addWave(frameInterval);
		let game = this;
		const { waves } = this;

		// wave despawn logic
		this.removeWave();

		//cursor angle as theta
		let degrees = this.cursor.degrees;
		degrees = degrees % 360;
		while (degrees < 0) {
			degrees += 360;
		}

		waves.forEach((wave) => {
			// if any return true, call this.gameOver()
			if (wave.move(degrees, game)) this.controls.gameOver();
		});
	}

	// top right timer
	timerCounter(timeElapsed) {
		this.totalTimeElapsed += timeElapsed;
		let roundedTime = Math.round(this.totalTimeElapsed / 10) / 100;
		this.timer[0].innerHTML = roundedTime.toString();
	}

	startNewGame() {
		this.totalTimeElapsed = 0;
		this.subwaveTimer = 0;
		this.subWaveInterval = 2;
		this.waves = [];
		this.patternList = [];
		this.difficulty = 'easy';
		this.controls.state.left.active = false;
		this.controls.state.right.active = false;
		this.rotation = 0;
		if (Math.round(Math.random())===0){
		this.rotationSpeed = 0.1;} else {this.rotationSpeed = -0.1;};
		this.cursor.reset();
		this.deadShip = false;
		this.isGameOver = false;
		this.audio.currentTime = 0;
		this.audio.volume = 0.5;
		this.audio.play();
	}

	gameOver() {
		const survivedTime = Math.round(this.totalTimeElapsed / 10) / 100;

		this.highScoreBox[0].classList.remove('hidden');
		this.highScoreBox[0].classList.add('hidden');
		
		if (// if current survivted time is greater than any of the listed high scores
			this.highScores.some((oldTime)=>{
				return survivedTime > oldTime
			})
			
		) {
			this.newHighScore = true;
			this.highScoreBox[0].classList.remove('hidden');
			this.highScoreInputField[0].focus();
			this.highScoreInputField[0].select();
		}

		this.deadShip = true;
		this.isGameOver = true;
		this.audio.volume = 0.1;
	}

	addHighScore(event) {
		event.preventDefault();

		const survivedTime = Math.round(this.totalTimeElapsed / 10) / 100;

		let highScoreInputField = document.getElementsByClassName('high-score-input-field')[0];
		let highScoreName = highScoreInputField.value;

		// TODO database stuff goes here
		Firebase_API.postHighScore(highScoreName, survivedTime)
		.then((el) => Firebase_API.fetchHighScores(this.populateHighScores.bind(this)));

		// clear entered name and reset game logic
		highScoreInputField.value = '';
		this.highScoreBox[0].classList.add('hidden');
		this.newHighScore = false;
		this.totalTimeElapsed = 0;
		this.controls.gameOver("highscore");
	}

	populateHighScores(highScores){
		this.highScoreList[0].innerHTML = '<section><span>Top Survivors</span></section>';
		this.highScores = [];	

		highScores.forEach((scorer)=>{
			this.highScoreList[0].innerHTML += `<div><span class="player-name">${scorer.name} </span><span>${scorer.time} s</span></div>`;
			this.highScores = this.highScores.concat(scorer.time);
		})
	}
}



export default Game;
