// player controls
class Controls {
	constructor(game) {
		this.game = game;
		this.state = {
			left: { active: false },
			right: { active: false }
		};
		this.disablePlayerControls = this.disablePlayerControls.bind(this);
		this.enablePlayerControls = this.enablePlayerControls.bind(this);
		this.keyDown = this.keyDown.bind(this);
		this.keyUp = this.keyUp.bind(this);
		this.startGame = this.startGame.bind(this);
		this.gameOver = this.gameOver.bind(this);
		this.highScoreList = document.getElementsByClassName('high-score-box');
		this.overlay = document.getElementsByClassName('overlay');
		this.bigLogo = document.getElementsByClassName('start-game-logo');
		this.smallLogo = document.getElementsByClassName('title-box');
		this.gameInfo = document.getElementsByClassName('start-game-info');
		this.aboutMe = document.getElementsByClassName('about-me');
		this.loading = document.getElementsByClassName('loading');
		this.deathExplosion = new Audio(
			'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/explosion_sound.mp3'
		);
		this.deathExplosion.volume = 0.5;
	}

	enablePlayerControls() {
		document.removeEventListener('keydown', this.startGame);

		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);
	}

	disablePlayerControls(initial) {
		if (!this.game.newHighScore) {
			if (initial) {
				this.loading[0].innerText = 'Loading';
				setTimeout(() => {
					document.addEventListener('keydown', this.startGame);
					this.loading[0].innerText = 'Press Space to begin';
				}, 1500);
			} else {
				document.addEventListener('keydown', this.startGame);
			}
		}
		document.removeEventListener('keydown', this.keyDown);
		document.removeEventListener('keyup', this.keyUp);
	}

	keyDown(e) {
		switch (e.code) {
			case 'ArrowRight':
				if (!this.state.right.active) {
					this.state.right.active = true;
				}
				break;
			case 'ArrowLeft':
				if (!this.state.left.active) {
					this.state.left.active = true;
				}
				break;
			default:
				break;
		}
	}

	keyUp(e) {
		switch (e.code) {
			case 'ArrowRight':
				this.state.right.active = false;
				break;
			case 'ArrowLeft':
				this.state.left.active = false;
				break;
			default:
				break;
		}
	}

	startGame(e) {
		if (e.code === 'Space') {
			this.game.startNewGame();
			this.deathExplosion.pause();
			this.deathExplosion.currentTime = 0;
			this.overlay[0].classList.add('clear-background-image');
			this.bigLogo[0].classList.remove('start-game-logo-fade-in');
			this.bigLogo[0].classList.add('start-game-logo-fade-out');
			this.smallLogo[0].classList.remove('title-box-fade-out');
			this.smallLogo[0].classList.add('title-box-fade-in');
			this.gameInfo[0].classList.remove('start-game-info-fade-in');
			this.gameInfo[0].classList.add('start-game-info-fade-out');
			this.highScoreList[0].classList.add('hidden');
			this.aboutMe[0].classList.add('hidden');
			this.enablePlayerControls();
		}
	}

	gameOver(initial) {
		if (!initial) {
			this.deathExplosion.play();
		}
		this.game.gameOver();
		this.bigLogo[0].classList.remove('start-game-logo-fade-out');
		this.bigLogo[0].classList.add('start-game-logo-fade-in');
		this.smallLogo[0].classList.remove('title-box-fade-in');
		this.smallLogo[0].classList.add('title-box-fade-out');
		this.gameInfo[0].classList.remove('start-game-info-fade-out');
		this.gameInfo[0].classList.add('start-game-info-fade-in');
		this.highScoreList[0].classList.remove('hidden');
		this.aboutMe[0].classList.remove('hidden');
		this.disablePlayerControls(initial);
	}
}

export default Controls;
