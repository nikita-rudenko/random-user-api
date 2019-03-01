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

		return (
			<>
				<Categories />

				<section className="user-list container">
					{results.length === 0 ? (
						<div className="text-title text-center pt-4">No results</div>
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
