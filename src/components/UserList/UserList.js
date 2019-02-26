import React, { Component } from 'react';
import './UserList.css';
import User from '../User/User';

export default class UserList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const results = this.props.data;

		return (
			<table>
				<thead />
				<tbody>
					{results.map((user, index) => {
						return <User key={index} details={user} />;
					})}
				</tbody>
			</table>
		);
	}
}
