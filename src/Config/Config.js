const chance = require('chance');

let token = '';
let appVersion = '1.1.0';

module.exports = {
	UrlRoute: 'https://api.telegram.org',
	SetToken: (token) => {
		this.token = token;
	},
	setAppVersion: (version) => {
		this.appVersion = version
	},
	getAppVersion: () => {
		return this.appVersion || appVersion
	},
	generateRandomSring: () => {
		return chance.string();
	}
}