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
			<div className="user rounded">
				<div className="user__head container" onClick={activateTab}>
					<div className="row">
						<div className="head__avatar text-center col-1">
							<img className="avatar" src={medium} alt="Avatar." />
						</div>
						<div className="head__detail col-2 text-capitalize">{last}</div>
						<div className="head__detail col-2 text-capitalize">{first}</div>
						<div className="head__detail col-2">{username}</div>
						<div className="head__detail col-2">{phone}</div>
						<div className="head__detail col-2 text-capitalize">{state}</div>
						<div className="head__detail text-center col-1">
							<i className={isActive ? 'fas fa-minus' : 'fas fa-plus'} />
						</div>
					</div>
				</div>

				<div>
					<div className={isActive ? 'user__body--show' : 'user__body--hide'}>
						<div className="row">
							<div className="body__name text-title text-capitalize">
								{first}
								{'  '}
								<span>
									<i
										className={
											gender === 'male' ? 'fas fa-male' : 'fas fa-female'
										}
									/>
								</span>
							</div>
						</div>
						<div className="row">
							<div className="body__detail col-1" />
							<div className="body__detail col-3">
								<div>
									<b>Username </b>
									{username}
								</div>
								<div>
									<b>Registered</b> {regDate}
								</div>
								<div>
									<b>Email</b> {email}
								</div>
							</div>
							<div className="body__detail col-3">
								<div className="text-capitalize">
									<b>Address</b> {street}
								</div>
								<div className="text-capitalize">
									<b>City</b> {city}
								</div>
								<div>
									<b>Zip Code </b> {postcode}
								</div>
							</div>
							<div className="body__detail col-2">
								<div>
									<b>Birthday</b> {birthDate}
								</div>
								<div>
									<b>Phone</b> {phone}
								</div>
								<div>
									<b>Cell</b> {cell}
								</div>
							</div>
							<div className="text-center col-3">
								<img className="avatar" src={large} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
