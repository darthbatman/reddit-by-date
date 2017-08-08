var request = require('request');

module.exports.getPosts = function(month, day, year, subreddit, callback){

	var startDate = Math.floor(Date.UTC(year, month, day, 0, 0, 0)/1000);

	var endDate = Math.floor(Date.UTC(year, month, day, 23, 0, 0)/1000);

	request("https://www.reddit.com/r/" + subreddit + "/search.json?rank=score&syntax=cloudsearch&restrict_sr=on&q=timestamp%3A" + startDate + ".." + endDate, function(err, res, body){

		if (err) {

			callback(err);

		}

		var data = JSON.parse(body).data.children.map(function(o) {

		    return { subreddit: o.data.subreddit, id: o.data.id, author: o.data.author, name: o.data.name, score: o.data.score, subreddit_id: o.data.subreddit_id, downs: o.data.downs, ups: o.data.ups, permalink: "https://www.reddit.com" + o.data.permalink, created: o.data.created, url: o.data.url, title: o.data.title, num_comments: o.data.num_comments, subreddit_type: o.data.subreddit_type };
		
		});
		
		callback(null, data);

	});

};