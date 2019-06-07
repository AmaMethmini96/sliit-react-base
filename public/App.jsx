import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './components/todo-list.component';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Router>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<Link className="navbar-brand" to="/">
							<h2>CRUD App</h2>
						</Link>
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link className="nav-link" to="/create">
									Create Todo
								</Link>
							</li>
							<li className="navbar-item">
								<Link className="nav-link" to="/">
									Todo List
								</Link>
							</li>
						</ul>
					</nav>
					<Route path="/" exact component={TodoList} />
					<Route path="/create" exact component={CreateTodo} />
					<Route path="/edit/:id" exact component={EditTodo} />
				</Router>
			</div>
		);
	}
}
