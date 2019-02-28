import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

export default class Chart extends Component {
	render() {
		const labelOptions = {
			fontSize: '6px',
			fill: '#fff'
		};
		return (
			<PieChart
				className="chart mx-auto"
				animate
				label={({ data, dataIndex }) =>
					Math.round(data[dataIndex].percentage) + '%'
				}
				labelPosition={50}
				labelStyle={labelOptions}
				data={[
					{ title: 'Male', value: 75, color: '#7CB5EC' },
					{ title: 'Female', value: 25, color: '#424247' }
				]}
			/>
		);
	}
}
