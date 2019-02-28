import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import { users } from './data';
import Header from './components/Header';
import UserList from './components/UserList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			url: `https://randomuser.me/api?results=50`,
			isLoading: false
		};
	}

	async getRandomUsers() {
		this.setState({
			isLoading: true
		});
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			console.log(jsonData);

			if (jsonData.length === 0) {
				this.setState({
					isLoading: false
				});
			} else {
				this.setState({
					data: jsonData.results,
					isLoading: false
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	componentDidMount = () => {
		this.getRandomUsers();
	};

	render() {
		return (
			<>
				<Header />
				<UserList data={this.state.data} />
			</>
		);
	}
}

export default App;
