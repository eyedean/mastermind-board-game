import React from 'react';
import Keypad from './Keypad';
import Feedback from './Feedback';
import GameController from '../controllers/GameController';


class MainBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { feedback: [] };
		this.configs = {
			NumberOfItems: 4,
			MaximumOptions : 7,
			MaximumAttempts : 10
		}
		this.controller = new GameController(this.configs);
		this.state.loading = true;
		this.onSubmitCallback = this.onSubmitCallback.bind(this);
		
	}

	componentDidMount() {
		this.controller.setUp().then(() =>
		this.setState({ loading: false}));
	}

	onSubmitCallback(input) {
		const result = this.controller.evaluateInput(input);
		this.setState({
			feedback:[...this.state.feedback, result]
		});
	}



	render () {
		return this.state.loading ? (
			<div>Loading...</div>
		) : (
			<div>
				<table>
					<tbody>
						<tr>
							<td>
								<Feedback message={this.state.feedback}/>
							</td>
						</tr>
						<tr style={{display: this.controller.isOver() ? 'none' : 'auto'}}>
							<td>
							<Keypad maxlength={this.configs.NumberOfItems} 
								onSubmitCallback={this.onSubmitCallback}/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default MainBoard;
