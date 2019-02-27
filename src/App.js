import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { users } from './data';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: users.results
		};
	}
	render() {
		return (
			<>
				<SearchBar />
				<UserList data={this.state.data} />
			</>
		);
	}
}

export default App;
