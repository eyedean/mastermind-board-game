# Mastermind Game

## Live Demo
Live demo of this app can be found at https://mastermind-number-game.herokuapp.com/

## Mastermind
This is a mastermind game, which you will compete against the computer.
You need to guess a number that has already been randomly provided by the computer. 

# Table of Contents

1. [Set Up](#set-up)
1. [Game Rules](#game-rules)
1. [Extensions Implemented](#extensions-implemented)
1. [Documentation](#documentation)


# Set Up


### Installing the dependencies

```
npm i
```

### Running The App

From within the root directory:

```sh
npm start
```

# Game Rules

This project is an implementation of the [Mastermind board game](https://en.wikipedia.org/wiki/Mastermind_(board_game)).  You will be playing against a computer agent and your goal is to guess a sequence of N numbers, between 0 and K each (inclusive), that are randomly picked by the computer at the beginning of each game. (Default N = 4, and K = 7).

You will have L attempts. (Default L = 10).  At each attempt, you need to enter N numbers, and upon the submission, you will receive a feedback message.

### Feedback
Unless you win (guess the sequence correctly) or you lose (run out of attempts), the feedback message will contain two numbers:

* **Partially right:** It shows the amount of number(s) you guessed correctly, but not in order yet.

* **Exactly right:** It shows the amount of in order number(s) you guessed correctly, both in terms of the number and the order/position.

# Extensions Implemented
The following extensions are implemented into the game:

## Extension 1) Replay button
You can click on the Playback button whenever in your game, to reset everything at any point in time.

## Extension 2) Difficult Level
At the beginning of the game, an option to choose a difficulty level is provided.  To keep it simple in the User Interface, we only show words “EASY”, “MEDIUM”, and “HARD” as buttons.

The meaning of them is as below:

* **Easy:** Guess **3 digits number.** Each digit can be between **0 to 5.** You will win if you guess the number up to **10 attempts.**


* **Medium:**  Guess **4 digits number.** Each digit can be between **0 to 7.** You will win if you guess the number up to **10 attempts.**


* **Hard:** Guess **5 digits number.** Each digit can be between **0 to 9.** You will win if you guess the number up to **12 attempts.**

# Documentation
Further Docs can be found in `docs/` folder of this repository.