import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
	constructor(props) {
		super(props);

		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeResponsible = this.onChangeResponsible.bind(this);
		this.onChangePriority = this.onChangePriority.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			description: '',
			responsible: '',
			priority: '',
			completed: false
		};
	}

	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}

	onChangeResponsible(e) {
		this.setState({
			responsible: e.target.value
		});
	}

	onChangePriority(e) {
		this.setState({
			priority: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(this.state.description);
		console.log(this.state.responsible);
		console.log(this.state.priority);
		console.log(this.state.completed);

		const newTodo = {
			description: this.state.description,
			responsible: this.state.responsible,
			priority: this.state.priority,
			completed: this.state.completed
		};

		axios.post('http://localhost:3000/api/messages/add', newTodo).then((res) => console.log(res.data));

		this.setState({
			description: '',
			responsible: '',
			priority: '',
			completed: false
		});
	}

	render() {
		return (
			<div className="container">
				<h3>Create Todo</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Description</label>
						<input
							type="text"
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeDescription}
						/>
					</div>
					<div className="form-group">
						<label>Responsible</label>
						<input
							type="text"
							className="form-control"
							value={this.state.responsible}
							onChange={this.onChangeResponsible}
						/>
					</div>
					<div className="form-group">
						<div className="form-check form-check-inline">
							<input
								type="radio"
								name="priorityOption"
								id="priorityLow"
								value="Low"
								className="form-check-input"
								checked={this.state.priority == 'Low'}
								onChange={this.onChangePriority}
							/>
							<label htmlFor="priorityLow" className="form-check-label">
								Low
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								type="radio"
								name="priorityOption"
								id="priorityMedium"
								value="Medium"
								className="form-check-input"
								checked={this.state.priority == 'Medium'}
								onChange={this.onChangePriority}
							/>
							<label htmlFor="priorityMedium" className="form-check-label">
								Medium
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								type="radio"
								name="priorityOption"
								id="priorityHigh"
								value="High"
								className="form-check-input"
								checked={this.state.priority == 'High'}
								onChange={this.onChangePriority}
							/>
							<label htmlFor="priorityHigh" className="form-check-label">
								High
							</label>
						</div>
					</div>
					<div className="form-group">
						<input type="submit" value="Add Todo" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}
