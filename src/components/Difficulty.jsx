import React from 'react';

class Difficulty extends React.Component {
	constructor(props) {
		super(props);
	
		this.handleLevel = this.handleLevel.bind(this);
	}


	handleLevel(event) {
		const level = event.target.value;
		this.props.onDifficultyCallback(level);
		event.preventDefault();
	}

	render() {
		return(
			<div className="difficulty">
				<h2>Welcome to MasterMind!</h2>
				<h4>Choose Difficulty Level to Start!</h4>
				<br />
				<input type="button" value="EASY" onClick={this.handleLevel}/>
				<input type="button" value="MEDIUM" onClick={this.handleLevel}/>
				<input type="button" value="HARD" onClick={this.handleLevel}/>
			</div>
		);
	}

}

export default Difficulty;

