# Convergence
Convergence is minimal movement game inspired by super hexagon and coded with pure Javascript. 

<a href="https://applecidera.github.io/convergence/"><img src="https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/convergence.gif"/></a>

<a href="https://applecidera.github.io/convergence/"  target="_blank">Try the demo here</a>

## Background & Overview
Convergence is a limited movement survival game in which the player will control a ship on a 2d plane. Player controls are limited to Left-Arrow and Right-Arrow which will move the ship counterclockwise and clockwise respectively about a center pivot point. Players will need to move the ship in order to avoid converging walls of energy. The goal of the game is to not touch any of the moving shapes for 60 seconds. 

Convergence was conceptualized over a weekend and coded over the following next week. The main concept behind the game was to implement simplistic minimal movement controls that anybody could pick up in a few seconds but still still retained a high skill ceiling. The coding structure of the game follows basic object oriented programming concepts, destructuring the game components into primitive easy to manage states. 

## Technologies
Convergence is created with Javascript and rendered via canvas. High scores are persisted using Google firebase. As a self imposed challenge, no other external libraries or frameworks were used.

## Frame Limiting
To ensure smooth gameplay across all devices, the framerate was throttled to 60 fps, about 1 frame per 17 milliseconds. Since requestAnimationFrame is accurate to 5 milliseconds, it was preferable over a setInterval, which is only accurate to 50 milliseconds.

```javascript
ticker(time) {
  const { frameInterval, setTime } = this;

  let curTime = time;
  let timeDif = curTime - setTime;

  if (timeDif >= frameInterval) {
    this.game.logic(frameInterval);
    this.game.draw();
    this.setTime = curTime;
  }

  window.requestAnimationFrame(this.ticker.bind(this));
  }
```

## High Scores
Since Firebase doesn't have reverse sorting functionality, we need to sort them after fetching the scores. Once the high scores are fetched, they can be passed to the front end via a promise callback.
```javascript
export const fetchHighScores = (populateHighScores) => {
	const highScoresRef = db.ref('highScores/');

	highScoresRef
		.orderByChild('time')
		.limitToLast(10)
		.once('value')
		.then((data) => {
			let highScores = [];
			data.forEach((el) => {
				highScores.unshift(el.val());
			});
			populateHighScores(highScores);
		});
};
```

#### Future Features
* Difficulty selection for an easier or more challenging experience
* Multiple lives option to extend the play session
