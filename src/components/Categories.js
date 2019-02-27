import React, { Component } from 'react';

export default class Categories extends Component {
	render() {
		return (
			<div className="container">
				<div className="container bg-dark rounded">
					<div className="header row">
						<div className="col-1" />
						<div className="col-2">Last</div>
						<div className="col-2">First</div>
						<div className="col-2">Username</div>
						<div className="col-2">Phone</div>
						<div className="col-2">Location</div>
						<div className="col-1" />
					</div>
				</div>
			</div>
		);
	}
}
