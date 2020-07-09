let AWS = require("aws-sdk"),
	connect = new AWS.Connect(),
	configurations = require("../configurations/config.json");

async function getPhoneNumbersList() {
	return await connect
		.listPhoneNumbers({
			InstanceId: configurations.instanceId,
			MaxResults: configurations.maxResults,
			PhoneNumberCountryCodes: configurations.phoneNumberCountryCodes,
			PhoneNumberTypes: configurations.phoneNumberTypes
		})
		.promise()
		.then(data => prepareResponse(data))
		.catch(error => prepareErrorResponse(error));
}

async function connectCall(request) {
	return await connect
		.startOutboundVoiceContact({
			InstanceId: configurations.instanceId,
			ContactFlowId: configurations.contactFlowId,
			DestinationPhoneNumber: request.destination,
			SourcePhoneNumber: request.source
		})
		.promise()
		.then(data => prepareResponse(data))
		.catch(error => prepareErrorResponse(error));
}

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
	getPhoneNumbersList,
	connectCall
};
