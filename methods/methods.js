let AWS = require("aws-sdk"),
	connect = new AWS.Connect(),
	message = require("./response"),
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
		.then(data => message.prepareResponse(data))
		.catch(error => message.prepareErrorResponse(error));
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
		.then(data => message.prepareResponse(data))
		.catch(error => message.prepareErrorResponse(error));
}

module.exports = {
	getPhoneNumbersList,
	connectCall
};
