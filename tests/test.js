var redditByDate = require('../reddit-by-date.js');

redditByDate.getPosts(3, 4, 2016, "news", function(err, posts){

	console.log(posts);

});