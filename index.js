var request = require('request');
var cookies = require('request/lib/cookies');
var CookieJar = require('tough-cookie').CookieJar;
var filestore = require('tough-cookie-filestore/lib/filestore');

var filestore;
cookies.jar = function(store) {
	var jar;
	if (store) {
	  jar = new CookieJar(store);
	} else {
		jar = new CookieJar();
	}

	jar._jar = jar;
	return jar;
}

request.jar = function(store) {
	return cookies.jar(store);
}

cookies.FileCookieStore = filestore.FileCookieStore;

module.exports = cookies;
