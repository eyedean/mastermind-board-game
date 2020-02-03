import React from 'react';


class Keypad extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Guess The Number
				<br />
					<input style={{border: "2Gpx solid red"}} />
					<input type="button" value="submit"/>
				<br />
			</div>
		);
	}

}

export default Keypad;