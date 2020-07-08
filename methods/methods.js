let AWS = require("aws-sdk");
var connect = new AWS.Connect();

let getPhoneNumbersList = async (request, response) => {
	var params = {
		InstanceId: "57e50858-292f-47de-9e4c-cf33238b946a",		//taken from amazon connect pak-venture instance
		MaxResults: 3,
		// NextToken: "",											//initially set empty as no previous token exists
		PhoneNumberCountryCodes: ["AS", "CZ", "AO", "AI", "AQ", "GB", "US"],	//max limit of array is 10 entries
		PhoneNumberTypes: ["TOLL_FREE", "DID"],					//max limit of array is 2 entries
	};
	
	console.log("in here");

	let data = await connect.listPhoneNumbers(params).promise();

	response = {
		statusCode: 200,
		body: JSON.stringify({
			data: data
		}, null, 2),
	};

	return response;
	
};

let connectCall = async (request, response) => {
	var params = {
		ContactFlowId: "8add30d4-8a6c-4c5d-ba28-7ab65266af0b", 	//contact flow id for default outbound
		DestinationPhoneNumber: "+923053156185", 				//
		InstanceId: "57e50858-292f-47de-9e4c-cf33238b946a", 	//taken from amazon connect pak-venture instance
		SourcePhoneNumber: "+420800021031"
	  };
	
	console.log("in here: Connect Call");

	let data = await connect.startOutboundVoiceContact(params).promise();

	console.log(data);
	response = {
		statusCode: 200,
		body: JSON.stringify({
			data: data
		}, null, 2),
	};

	return response;
}

module.exports = {
	getPhoneNumbersList,
	connectCall
};
