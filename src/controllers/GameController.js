import axios from 'axios';

export default class GameController {
	
	constructor() {
		this.N = 0;
		this.K = 0;
		this.maxAttemptsReset = 0;
		this.secret = [];
		this.hasWon = false;
		this.hasLost = false;
		this.attemptsRemained = 0;
	}

	getNumberOfItems() {
		return this.N;
	}

	getMaxOptions() {
		return this.K;
	}

	getRemainedAttempts() {
		return this.attemptsRemained;
	}

	setConfigs(level) {
		switch (level) {
			case "EASY":
				this.N 	= 3;
				this.K = 5;
				this.maxAttemptsReset = 10;
				break;

			case "MEDIUM":
				this.N 	= 4;
				this.K = 7;
				this.maxAttemptsReset = 10;
				break;

			case "HARD":
				this.N 	= 5;
				this.K = 9;
				this.maxAttemptsReset = 12;
				break;
		}
	}


	setUp(level) {
		this.setConfigs(level);

		this.attemptsRemained = this.maxAttemptsReset;
		this.hasWon = false;
		this.hasLost = false;
		
		const queryParams = {
			num: this.N,
			min: 0,
			max: this.K,
			col: 1,
			base: 10,
			format: "plain",
			rnd: "new"
		};

		const url = "https://www.random.org/integers/?"
			+ Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
		
		return axios.get(url)
			.then((response) => {
				const result = response.data
					.trim()
					.split("\n")
					.map((x) => parseInt(x, 10));
				this.secret = result;
			});
	}

	// NOTE: for debugging only
	// getSecret() {
	// 	return this.secret;
	// }

	isOver() {
		return (this.hasWon || this.hasLost);
	}

	evaluateInput(inputString) {
		const input = inputString.split("").map((x) => parseInt(x, 10));

		if(this.hasWon || this.hasLost) {
			return " You can not have anymore tries";
		}
		
		let exact = 0;
		let partial = 0;

		for (let i = 0; i < this.N; i++) {
			if ( this.secret[i] === input[i]) {
				exact++
			}
		}

		for (let value = 0; value <= this.K; value++) {

			let needed = 0;
			let given = 0;

			for (let i = 0; i < this.N; i++) {
				if(this.secret[i] === value) {
					needed++;
				}
			}

			for (let i = 0; i < this.N; i++) {
				if(input[i] === value) {
					given ++;
				}
			}

			let matched = Math.min(needed, given);
			partial += matched;
		}
		partial -= exact;

		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		this.attemptsRemained--;

		const secretString = this.secret.join('');

		if(exact === this.N) {
			this.hasWon = true;
			return `You Won! 🥳 It was ${secretString}!`;
		}

		if (this.attemptsRemained === 0) {
			this.hasLost = true;
			return `You Lost... 🙄 It was ${secretString}!`;
		}

		const emojis = ["🤭", "🤔", "😇", "😉", "🤩", "🤗"]; // when N = 5, we can have exact+partial being 5;
		return `You have got ${exact} exact(s), and ${partial} partial(s) for ${inputString}!` + emojis[exact + partial];
	}
};
