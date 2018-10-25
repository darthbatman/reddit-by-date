var request = require('./requester.js');

module.exports.getPosts = function getPosts(month, day, year, subreddit, callback) {
	var startDate, endDate, stringArray, options;

	startDate = Math.floor( Date.UTC(year, month, day) / 1000 );
	endDate = Math.floor( Date.UTC(year, month, day) / 1000 );
	stringArray = [
		'/r/',
		subreddit,
		'/search.json?rank=score&syntax=cloudsearch&restrict_sr=on&q=timestamp%3A',
		startDate,
		"..",
		endDate
	];
	options = {
		hostname: 'reddit.com',
		port: 443,
		path: stringArray.join("")
	};

	request(options, function(error, response) {
		var data;
		if (error) return callback(error);

		data = JSON.parse(response)
			.data.children.map(function(o) {
				o.data.permalink = "https://www.reddit.com" + o.data.permalink;
				return o.data;
			});
		
		return callback(null, data);
	});
};