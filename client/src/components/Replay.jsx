import React from 'react';


class Replay extends React.Component {
	constructor(props) {// props are resetSetup and resetRemainder ??
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
					<input type="submit" value="Play Again" onClick={this.handleReplay} />
			</div>
		
		)
	}
}

export default Replay;