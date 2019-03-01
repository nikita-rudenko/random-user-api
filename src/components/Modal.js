import React, { Component } from 'react';
import Chart from './Chart';

export default class Modal extends Component {
	render() {
		const { handleModal, genders } = this.props;
		const noData = genders.male || genders.female;

		return (
			<div className="overlay">
				<div className="modal-wrapper container">
					<div
						id="modal"
						className="col-6 mx-auto py-4 px-3 text-center rounded">
						<button
							className="float-right btn btn--close"
							onClick={handleModal}>
							Close
						</button>
						<h2 className="col-8 mx-auto mb-4">Gender of users</h2>
						{noData ? (
							<Chart genders={genders} />
						) : (
							<div className="no-chart text-title">
								No data for your current search
							</div>
						)}
						<div className="pt-4">
							<span>
								<i className=" modal__icon modal__icon--male fas fa-male" />{' '}
								Male
							</span>
							<span>
								{' '}
								<i className="modal__icon modal__icon--female fas fa-female" />{' '}
								Female
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
