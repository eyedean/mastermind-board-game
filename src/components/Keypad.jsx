import React from 'react';

class Keypad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	  }
	  
	  handleChange(event) {
		this.setState({value: event.target.value});
	  }
	
	  handleSubmit(event) {
		this.props.onSubmitCallback(this.state.value);
		this.setState({
			value: ""
		});
		event.preventDefault();
	  }

	render() {
		return (
			<div className="keypad">
				<h2>Welcome to MasterMind!</h2>
				<h4>Guess The Number!</h4>
				Enter {this.props.maxLength} numbers, between 0 and {this.props.maxOptions} (inclusive).
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							type="number"
							className="guess"
							maxLength={this.props.maxLength} 
							autoFocus value={this.state.value} 
							onChange={this.handleChange} 
						/>
					</label>
					<input type="submit" value="Submit" onClick={this.handleSubmit}/>
				</form>
			</div>
		);
	}

}

export default Keypad;