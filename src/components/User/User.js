import React, { Component } from 'react';
import './User.css';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0
		};
	}
	render() {
		const { name, location, login, phone, picture } = this.props.details;
		const { last, first } = name;
		const { state } = location;
		const { username } = login;
		const { medium } = picture;

		return (
			<>
				<tr>
					<td>
						<img src={medium} alt="avatar" />
					</td>
					<td>{last}</td>
					<td>{first}</td>
					<td>{username}</td>
					<td>{phone}</td>
					<td>{state}</td>
					<td>+</td>
				</tr>
			</>
		);
	}
}
