import React, { Component } from 'react';
import Chart from './Chart';

export default class Modal extends Component {
	render() {
		const { handleModal, genders } = this.props;
		const noData = genders.male || genders.female;

		return (
			<div id="modalWrapper">
				<div className="container">
					<div
						id="modal"
						className="col-8 mx-auto py-4 px-3 text-center rounded bg-white">
						<button
							className="float-right btn btn-danger"
							onClick={handleModal}>
							Close
						</button>
						<h1 className="col-8 mx-auto p-2">Gender of users</h1>
						{noData ? <Chart genders={genders} /> : <h2>No data</h2>}
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
