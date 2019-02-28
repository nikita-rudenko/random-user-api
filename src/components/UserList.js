import React, { Component } from 'react';
import User from './User';
import Categories from './Categories';

export default class UserList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: 0
		};
	}

	activateTab = index => {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	};

	render() {
		const results = this.props.data;
		const { activeTab } = this.state;
		console.log(results);

		return (
			<>
				<Categories />

				<section className="container">
					{results.length === 0 ? (
						<h3 className="text-center pt-4">No results.</h3>
					) : (
						results.map((user, index) => {
							index = index + 1;
							return (
								<User
									key={index}
									details={user}
									activeTab={activeTab}
									index={index}
									activateTab={this.activateTab.bind(null, index)}
								/>
							);
						})
					)}
				</section>
			</>
		);
	}
}
