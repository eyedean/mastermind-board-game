import React from 'react';

class Feedback extends React.Component {
	
	render() {
		return (
			<div className="feedback">
				<ol>
					{
						this.props.messages.map((msg, i) => {
							return(<li key={i}>{ msg }</li>)
						})
					}
				</ol>
			</div>
		)
	}
}

export default Feedback;

