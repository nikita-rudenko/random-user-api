import React, { Component } from 'react';
import './App.css';
import data from './data';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';

class App extends Component {
	render() {
		return (
			<>
				<SearchBar />
				<UserList />
			</>
		);
	}
}

export default App;
