var cookies = require('request/lib/cookies');

var filestore;
cookies.jar = function(options) {
	var store;
	var jar;
	if (options.cookiePath) {
		filestore = filestore || require('tough-cookie/lib/filestore');
		store = new filestore.FileCookieStore(path);
	  jar = new CookieJar(store);
	} else {
		jar = new CookieJar();
	}

	jar._jar = jar;
	return jar;
}

module.exports = cookies;
