import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = (props) => (
	<tr>
		<td>{props.todo.description}</td>
		<td>{props.todo.responsible}</td>
		<td>{props.todo.priority}</td>
		<td>
			<Link to={'/edit/' + props.todo._id}>Edit</Link>
		</td>
	</tr>
);

export default class TodosList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [ { description: 'tst' } ], arr1: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:3000/api/messages/get')
			.then((res) => {
				this.setState({
					arr1: res.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	todoList() {
		return this.state.arr1.map((currentTodo, i) => {
			return <Todo todo={currentTodo} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Todos List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Description</th>
							<th>Responsible</th>
							<th>Priority</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{this.todoList()}</tbody>
				</table>
			</div>
		);
	}
}
