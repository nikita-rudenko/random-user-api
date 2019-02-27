import React, { Component } from 'react';
import User from './User';
import Categories from './Categories';

export default class UserList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const results = this.props.data;

		return (
			<>
				<Categories />
				<section className="container">
					{results.map((user, index) => {
						return <User key={index} details={user} />;
					})}
				</section>
			</>
		);
	}
}
