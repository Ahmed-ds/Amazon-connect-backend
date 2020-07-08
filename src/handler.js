let method = require("../methods/methods");

module.exports.getPhoneNumbersList = async (event) => {
	return await method.getPhoneNumbersList();
};

module.exports.connectCall = async (event) => {
	let requestBody = JSON.parse(event.body);
	return await method.connectCall(requestBody);
}