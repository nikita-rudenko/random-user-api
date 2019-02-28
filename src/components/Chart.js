import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

export default class Chart extends Component {
	render() {
		const { genders } = this.props;
		const { male, female } = genders;

		const labelOptions = {
			fontSize: '6px',
			fill: '#fff'
		};
		return (
			<PieChart
				className="chart mx-auto"
				animate
				label={({ data, dataIndex }) =>
					Math.round(data[dataIndex].percentage * 100) / 100 + '%'
				}
				labelPosition={50}
				labelStyle={labelOptions}
				data={[
					{ title: 'Male', value: male, color: '#7CB5EC' },
					{ title: 'Female', value: female, color: '#424247' }
				]}
			/>
		);
	}
}
