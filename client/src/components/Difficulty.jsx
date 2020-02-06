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
				Choose Difficulty Level to Start!
				<br />< br />
				<input type="submit" value="EASY" onClick={this.handleLevel}/>
				<input type="submit" value="MEDIUM" onClick={this.handleLevel}/>
				<input type="submit" value="HARD" onClick={this.handleLevel}/>
			</div>
		);
	}

}

export default Difficulty;

