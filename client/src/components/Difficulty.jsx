import React from 'react';

class Difficulty extends React.Component {
	constructor(props) {
		super(props);
	
		this.handleLevel = this.handleLevel.bind(this);
	}


	handleLevel(event) {
		this.props.onDifficultyCallback();
		event.preventDefault();
	}

	render() {
		return(
			<div>
				Choose Difficulty
				<input type="submit" value="difficulty" onClick={this.handleLevel}/>
			</div>
		);
	}

}

export default Difficulty;

