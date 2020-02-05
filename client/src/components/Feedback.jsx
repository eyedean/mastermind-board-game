import React from 'react';

class Feedback extends React.Component {
	
	render() {
		return (
			<div className="container">
				<ol >
					{
						this.props.message.map((msg, i) => {
							return(<li key={i}>
								<span className="d-block p-2 bg-primary text-white">
									{ msg }
								</span>
							</li>)
						})
					}
				</ol>
									
				Remained Attempt(s): {this.props.remainedAttempts}
			</div>
		)
	}
}

export default Feedback;

