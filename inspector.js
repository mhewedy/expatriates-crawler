var cheerio = require('cheerio');
var request = require('request');

var success = 0;

var call = function(url, callback, cbParams) {
    request({
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"
        },
        "url": url
    }, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            callback($, cbParams);
			console.log('success: ' + (++success) );
        } else {
            call(url, callback, cbParams);
        }
    });
};

module.exports.call = call;
