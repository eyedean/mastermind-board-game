import React from 'react';

class Replay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleReplay = this.handleReplay.bind(this);	
	}

	handleReplay(event) {
		this.props.onReplayCallback();
		event.preventDefault();
	}

	render() {
		return ( 
			<div className="replay">
				<input type="button" value="Play Again" onClick={this.handleReplay} />
				<div>
					Remained Attempt(s): {this.props.remainedAttempts}
				</div>
			</div>
		)
	}
}

export default Replay;