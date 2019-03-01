import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
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
			genders: null,
			url: `https://randomuser.me/api?results=51`,
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

			this.setState(
				() => {
					return {
						data: jsonData.results,
						isLoading: false
					};
				},
				() => {
					this.countGenderGenders();
				}
			);
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

		this.setState(
			() => {
				return { searchData };
			},
			() => {
				this.countGenderGenders();
			}
		);
	};

	handleModal = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	};

	countGenderGenders() {
		const { searchData, data } = this.state;
		const userData = searchData ? searchData : data;

		let genders = {
			female: 0,
			male: 0
		};

		for (let key in userData) {
			const user = userData[key];
			if (user.gender === 'male') {
				genders.male = genders.male + 1;
			} else if (user.gender === 'female') {
				genders.female = genders.female + 1;
			}
		}

		this.setState({
			genders: genders
		});
	}

	componentDidMount = () => {
		this.getRandomUsers();
	};

	render() {
		const { data, searchData, genders, isLoading, isModalOpen } = this.state;
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
				{isModalOpen ? (
					<Modal genders={genders} handleModal={this.handleModal} />
				) : null}
			</>
		);
	}
}

export default App;
