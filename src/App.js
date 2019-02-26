import React, { Component } from 'react';
import './App.css';
import { users } from './data';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';

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
				<section>
					<UserList data={this.state.data} />
				</section>
			</>
		);
	}
}

export default App;
