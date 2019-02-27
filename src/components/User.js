import React, { Component } from 'react';

export default class User extends Component {
	render() {
		const { activeTab, index, activateTab } = this.props;
		const isActive = activeTab === index;

		const {
			gender,
			name,
			location,
			email,
			login,
			registered,
			dob,
			phone,
			cell,
			picture
		} = this.props.details;
		const { last, first } = name;
		const { street, city, state, postcode } = location;
		const { username } = login;
		const regDate = new Date(registered.date).toLocaleDateString();
		const birthDate = new Date(dob.date).toLocaleDateString();
		const { medium, large } = picture;

		return (
			<div className="user rounded" onClick={activateTab}>
				<div className="user__head container">
					<div className="row">
						<div className="head__image text-center col-1">
							<img src={medium} alt="avatar" />
						</div>
						<div className="head__detail col-2">{last}</div>
						<div className="head__detail col-2">{first}</div>
						<div className="head__detail col-2">{username}</div>
						<div className="head__detail col-2">{phone}</div>
						<div className="head__detail col-2">{state}</div>
						<div className="head__detail text-center col-1">
							{isActive ? '-' : '+'}
						</div>
					</div>
				</div>

				<div>
					<div className={isActive ? 'user__body--show' : 'user__body--hide'}>
						<div className="row">
							<h3 className="body__name">
								{first} <span>{gender === 'male' ? 'M' : 'F'}</span>
							</h3>
						</div>
						<div className="row">
							<div className="body__detail col-1" />
							<div className="body__detail col-3">
								<div>
									<strong>Username </strong>
									{username}
								</div>
								<div>
									<strong>Registered</strong> {regDate}
								</div>
								<div>
									<strong>Email</strong> {email}
								</div>
							</div>
							<div className="body__detail col-3">
								<div>
									<strong>Address</strong> {street}
								</div>
								<div>
									<strong>City</strong> {city}
								</div>
								<div>
									<strong>Zip Code </strong> {postcode}
								</div>
							</div>
							<div className="body__detail col-2">
								<div>
									<strong>Birthday</strong> {birthDate}
								</div>
								<div>
									<strong>Phone</strong> {phone}
								</div>
								<div>
									<strong>Cell</strong> {cell}
								</div>
							</div>
							<div className="body__image text-center col-3">
								<img src={large} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
