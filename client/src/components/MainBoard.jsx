import React from 'react';
import Keypad from './Keypad';
import GameController from '../controllers/GameController';

class MainBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.configs = {
			NumberOfItems: 4,
			MaximumOptions : 7,
			MaximumAttempts : 10
		}
		this.controller = new GameController(this.configs);
		
	}

	componentDidMount() {
		this.controller.setUp();
	}


	render () {
		return (
			<div>
				<Keypad />
			</div>
		)
	}
}

export default MainBoard;
