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
			<div>
				<input type="button" className="btn btn-success btn-lg btn-block" value="Play Again" onClick={this.handleReplay} />
			</div>
		
		)
	}
}

export default Replay;