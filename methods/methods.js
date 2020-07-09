let AWS = require("aws-sdk");
var connect = new AWS.Connect();

let getPhoneNumbersList = async (request, response) => {
	var params = {
		InstanceId: "1fb96870-537b-4697-b553-184540b7643f", //taken from amazon connect pak-venture instance
		MaxResults: 3,
		// NextToken: "",											//initially set empty as no previous token exists
		PhoneNumberCountryCodes: ["AS", "CZ", "AO", "AI", "AQ", "GR", "US"], //max limit of array is 10 entries
		PhoneNumberTypes: ["TOLL_FREE", "DID"], //max limit of array is 2 entries
	};

	let data = await connect.listPhoneNumbers(params).promise();

	response = {
		statusCode: 200,
		body: JSON.stringify(
			{
				data: data,
			},
			null,
			2
		),
	};

	return response;
};

let connectCall = async (request, response) => {
	var params = {
		ContactFlowId: "f6dca2ae-b04c-464f-8fc7-c2899f0c7c70", //contact flow id for default outbound
		DestinationPhoneNumber: request.destination, //contact number of the client
		InstanceId: "1fb96870-537b-4697-b553-184540b7643f", //taken from amazon connect pak-venture instance
		SourcePhoneNumber: request.source,
	};

	let data = await connect.startOutboundVoiceContact(params).promise();

	response = {
		statusCode: 200,
		body: JSON.stringify(
			{
				data: data,
			},
			null,
			2
		),
	};

	return response;
};

module.exports = {
	getPhoneNumbersList,
	connectCall,
};
