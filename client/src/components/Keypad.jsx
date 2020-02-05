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
			<div>
				<h3>Guess The Number</h3>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input maxLength={this.props.maxlength} 
							   autoFocus value={this.state.value} 
							   onChange={this.handleChange} 
							   style={{border: "1px solid gray", fontSize: "18px", width: "100px", margin: "10px"}}
							   />
					</label>
					<input type="submit" value="Submit" onClick={this.handleSubmit}/>
					<input type="submit" value="Play Again" onClick={this.playAgain}/>
				</form>
			</div>
		);
	}

}

export default Keypad;