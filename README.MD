# Convergence
Convergence is minimal movement game inspired by super hexagon and coded with pure Javascript. 

<a href="https://applecidera.github.io/convergence/"><img src="https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/convergence.gif"/></a>

<a href="https://applecidera.github.io/convergence/"  target="_blank">Try the demo here</a>

## Background & Overview
Convergence is a limited movement survival game in which the player will control a ship on a 2d plane. Player controls are limited to Left-Arrow and Right-Arrow which will move the ship counterclockwise and clockwise respectively about a center pivot point. Players will need to move the ship in order to avoid converging walls of energy. The goal of the game is to not touch any of the moving shapes for 60 seconds. 

Convergence was conceptualized over a weekend and coded over the following next week. The main concept behind the game was to implement simplistic minimal movement controls that anybody could pick up in a few seconds but still still retained a high skill ceiling. The coding structure of the game follows basic object oriented programming concepts, destructuring the game components into primitive easy to manage states. 

## Technologies
Convergence is created with Javascript and rendered via canvas. High scores are persisted using Google firebase. As a self imposed challenge, no other external libraries or frameworks were used.

#### Future Features
* Difficulty selection for an easier or more challenging experience
* Multiple lives option to extend the play session
