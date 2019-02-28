import React from 'react';

const LoadingPage = () => {
	return (
		<>
			<div className="container-fluid fill d-flex justify-content-center mt-5 pt-5">
				<div className="spinner spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</>
	);
};

export default LoadingPage;
