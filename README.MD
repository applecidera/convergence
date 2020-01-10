# Convergence

## 1. Background & Overview
Convergence will be a limited movement survival game in which the player will control a Cursor on a 2d plane. Player controls will be limited to Left-Arrow and Right-Arrow which will move the cursor counter-clockwise and clockwise respectively about a center pivot point. Players will need to move the cursor in order to avoid incoming shapes that are moving towards the center pivot point. The goal of the game is to not touch any of the moving shapes for 60 seconds.

## 2. Functionality & MVPs
In Convergence users will be able to:
1. Interact with the game via a game view port and control a cursor
2. Use the left or right arrow keys to move the cursor clockwise and counter-clockwise
3. Be able to see and dodge moving walls that converge towards the center pivot point
4. Be able to lose the game upon having the cursor touch any of the  moving walls
5. See a timer on the screen that keeps track of how long they have survived
* Bonus - Add a sound-track and sound effects that augments user experience
* Bonus - Implement wall patterns with increasing difficulty as game goes on
* Bonus - Implement high-score system that tracks longest surviving time

## 3. Wireframes
<img src="https://raw.githubusercontent.com/applecidera/hexa-evolution/master/assets/convergence-wireframe.png"/>


## 4. Architecture and Technology
Convergence will be rendered with and animated via canvas. Game logic will be coded with pure Javascript. Node modules will be bundled and packaged with WebPack.
* Bonus - GoogleFirebase can be used to keep track of high scores

## 5. Implementation Timeline

#### Day 1
* MVP 1 - Boilerplate and Learn how to render shapes via canvas.
#### Day 2
* MVP 2 - Learn how to animate and use keyboard to move cursor in canvas
#### Day 3
* MVP 3 - Create rectangles (walls) and move them towards the center pivot-point
#### Day 4
* MVP 4 - Implement hitbox mechanics for cursor in collision with Walls
#### Day 5
* MVP 5 - Create timer and gameplay loop and deploy onto heroku

#### Day 6+ 
* Bonuses if time allows