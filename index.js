var cookies = require('request/lib/cookies');
var CookieJar = require('tough-cookie').CookieJar;
var filestore = require('tough-cookie/lib/filestore').FileCookieStore;

var filestore;
cookies.jar = function(store) {
	var store;
	var jar;
	if (store) {
	  jar = new CookieJar(store);
	} else {
		jar = new CookieJar();
	}

	jar._jar = jar;
	return jar;
}

cookies.FileCookieStore = filestore.FileCookieStore;

module.exports = cookies;
