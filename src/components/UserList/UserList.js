import React, { Component } from 'react';
import './UserList.css';
import User from '../User/User';

export default class UserList extends Component {
	render() {
		return (
			<div>
				<User />
				<User />
				<User />
				<User />
				<User />
			</div>
		);
	}
}
