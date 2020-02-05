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
		this.state = { page: "INTRO", feedback: [] };

		this.controller = new GameController();
		this.onSubmitCallback = this.onSubmitCallback.bind(this);
		this.onReplayCallback = this.onReplayCallback.bind(this);
		this.onDifficultyCallback = this.onDifficultyCallback.bind(this);
	
	}

	initialize(level) {
		this.setState({ page: "LOADING" });
		this.controller.setUp(level).then(() =>
			this.setState({ page: "GAME", feedback:[] })
		);
	}

	onSubmitCallback(input) {
		const result = this.controller.evaluateInput(input);
		this.setState({
			feedback:[...this.state.feedback, result]
		});
	}

	onReplayCallback() {
		this.setState({ page: "INTRO" });
	}
	
	onDifficultyCallback(level) { // "EASY", "MEDIUM", "HARD"
		console.log(`Setting level to: ${level}`);
		this.initialize(level);
	}

	render () {
		return this.state.page === "LOADING" ? (
			<div>Loading...</div>
		) : this.state.page === "INTRO" ? (
			<div>
				<h2>Intro</h2>
				<Difficulty onDifficultyCallback={this.onDifficultyCallback}			
				/>
			</div>
		) : (
			<div style={{background: `url(${numbersImg})`, minHeight: '100vh'}}>
				Select {this.controller.getNumberOfItems()} numbers between 0 and 
				{this.controller.getMaxOptions()} inclusive.
				<table>
					<tbody>
		
						<tr style={{display: this.controller.isOver() ? 'none' : 'auto'}}>
							<td>
							<Keypad maxlength={this.controller.getNumberOfItems()} 
								onSubmitCallback={this.onSubmitCallback} 
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
