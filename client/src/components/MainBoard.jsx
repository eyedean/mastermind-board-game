import React from 'react';
import Keypad from './Keypad';
import Feedback from './Feedback';
import Replay from './Replay';
import Difficulty from './Difficulty';
import GameController from '../controllers/GameController';
import numbersImg from '../img/numbers.jpg';

class MainBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { page: "LOADING", feedback: [] };
		this.configs = {
			NumberOfItems: 4,
			MaximumOptions : 7,
			MaximumAttempts : 10
		}
		this.controller = new GameController(this.configs);
		this.onSubmitCallback = this.onSubmitCallback.bind(this);
		this.onReplayCallback = this.onReplayCallback.bind(this);
		this.onDifficultyCallback = this.onDifficultyCallback.bind(this);
	
	}

	initialize() {
		this.setState({ page: "LOADING" })
		this.controller.setUp().then(() =>
			this.setState({ page: "GAME", feedback:[] })
		);
	}

	componentDidMount() {
		this.initialize();
	}

	onSubmitCallback(input) {
		const result = this.controller.evaluateInput(input);
		this.setState({
			feedback:[...this.state.feedback, result]
		});
	}

	onReplayCallback() {
		this.initialize()
	}
	
	onDifficultyCallback(input) {
		const result = this.controller.chooseLevel(input);
		this.setState({
			
		});
	}

	render () {
		return this.state.page === "LOADING" ? (
			<div>Loading...</div>
		) : (
			<div style={{background: `url(${numbersImg})`, minHeight: '100vh'}}>
				<table>
					<tbody>
		
						<tr style={{display: this.controller.isOver() ? 'none' : 'auto'}}>
							<td>
							<Keypad maxlength={this.configs.NumberOfItems} 
								onSubmitCallback={this.onSubmitCallback} 
							/>
							</td>
						</tr>

						<tr>
							<td>
								<Difficulty difficulty={this.controller.chooseLevel()}
											onDifficultyCallback={this.onDifficultyCallback}			
								/>
							</td>
						</tr>

						<tr>
							<td>
								<Feedback message={this.state.feedback} 
										 remainedAttempts={this.controller.getRemainedAttempts()}
								/>
							</td>
						</tr>

						<tr>
							<td>
								<Replay onReplayCallback={this.onReplayCallback}/>
							</td>
						</tr>
					</tbody>
				</table>
				
			</div>
		)
	}
}

export default MainBoard;
