import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import { users } from './data';
import Header from './components/Header';
import UserList from './components/UserList';
import Loading from './components/Loading';
import Modal from './components/Modal';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			searchData: null,
			url: `https://randomuser.me/api?results=50`,
			isLoading: false,
			isModalOpen: false
		};
	}

	async getRandomUsers() {
		this.setState({
			isLoading: true
		});
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();

			this.setState({
				data: jsonData.results,
				isLoading: false
			});
		} catch (error) {
			console.log(error);
		}
	}

	handleSearch = e => {
		const searchQuery = e.target.value;

		const { data } = this.state;
		const searchData = data.filter(user =>
			user.name.first.includes(searchQuery)
		);

		this.setState({
			searchData
		});
	};

	handleModal = e => {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	};

	componentDidMount = () => {
		this.getRandomUsers();
	};

	render() {
		const { data, searchData, isLoading, isModalOpen } = this.state;
		return (
			<>
				<Header
					handleSearch={this.handleSearch}
					handleModal={this.handleModal}
				/>
				{isLoading ? (
					<Loading />
				) : (
					<UserList data={searchData ? searchData : data} />
				)}
				{isModalOpen ? <Modal handleModal={this.handleModal} /> : null}
			</>
		);
	}
}

export default App;
