import React from "react";

class Feedback extends React.Component {
	render() {
		return (
			<div>
				<ol>
					{
						this.props.message.map((msg, i) => {
							return(<li key={i}>{ msg }</li>)
						})
					}
				</ol>

			</div>
		)
	}
}

export default Feedback;