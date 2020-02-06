import React from 'react';

class Feedback extends React.Component {
	
	render() {
		return (
			<div>
				<ol >
					{
						this.props.messages.map((msg, i) => {
							return(<li key={i}>
								<span className="d-block p-2 bg-primary text-white">
									{ msg }
								</span>
							</li>)
						})
					}
				</ol>
			</div>
		)
	}
}

export default Feedback;

