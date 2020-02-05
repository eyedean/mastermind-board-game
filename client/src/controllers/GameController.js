import axios from "axios";

export default class GameController {
	constructor(configs) {
		this.secret = [];
		this.N = configs.NumberOfItems;
		this.K = configs.MaximumOptions;
		this.attemptsRemained = configs.MaximumAttempts;
		this.hasWon = false;
		this.hasLost = false;
	}


	setUp() {
		const queryParams = {
			num: 4,
			min: 0,
			max: 7,
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

	getSecret() {
		return this.secret;
	}

	isOver() {
		return (this.hasWon || this.hasLost);
	}

	getRemainedAttempts() {
		return this.attemptsRemained;
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

		const emojis = ["🤭", "🤔", "😇", "😉", "🤩"];
		return `You have got ${exact} exact(s), and ${partial} partial(s) for ${inputString}!` + emojis[exact + partial];
	}

};








