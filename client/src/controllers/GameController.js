import axios from "axios";

export default class GameController {
	constructor() {
		this.secret = [];
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

};






