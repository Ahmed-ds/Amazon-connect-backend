let method = require("../methods/methods");

module.exports.getPhoneNumbersList = async (event) => {
	return await method.getPhoneNumbersList();
};

module.exports.connectCall = async (event) => {

	return await method.connectCall(JSON.parse(event.body));
}