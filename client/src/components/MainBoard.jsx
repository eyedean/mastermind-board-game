import React from 'react';
import Keypad from './Keypad';
import GameController from '../controllers/GameController';

class MainBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.controller = new GameController();
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
