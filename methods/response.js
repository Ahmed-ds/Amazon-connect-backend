function prepareResponse(data) {
	return {
		statusCode: 200,
		body: JSON.stringify({
			data: data
		})
	};
}

function prepareErrorResponse(error) {
	return {
		statusCode: 500,
		body: JSON.stringify({
			error
		})
	};
}

module.exports = {
	prepareResponse,
	prepareErrorResponse
};