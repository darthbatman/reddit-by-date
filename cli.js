var request = require('./requester.js');
var month, day, year, subreddit, args, split, startDate, endDate, stringArray, options;

month = 0;
day = 0;
year = 0;
subreddit = "";
args = process.argv;

if (args.indexOf('-d') > -1) {
	split = args[args.indexOf('-d') + 1].split('-');
	month = split[0];
	day = split[1];
	year = split[2];
} else {
	throw new Error("No date detected. Please use the -d flag to provide a date.");
}

if (args.indexOf('-r') > -1) {
	subreddit = args[args.indexOf('-r') + 1];
} else {
	throw new Error("No subreddit detected. Please use the -r flag to provide a date.");
}

startDate = Math.floor( Date.UTC(year, month, day, 0, 0, 0) / 1000 );
endDate = Math.floor( Date.UTC(year, month, day, 23, 0, 0) / 1000 );
stringArray = [
	'/r/',
	subreddit,
	'/search.json?rank=score&syntax=cloudsearch&restrict_sr=on&q=timestamp%3A',
	startDate,
	'..',
	endDate,
];
options = {
	hostname: 'reddit.com',
	port: 443,
	path: stringArray.join("")
};

request(options, function(error, response) {
	var data;
	if (error) throw(error);

	data = JSON.parse(response)
		.data.children.map(function(o) {
			o.data.permalink = "https://www.reddit.com" + o.data.permalink;
			return o.data;
		});
	
	console.log(data);
});