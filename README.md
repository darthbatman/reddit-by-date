# reddit-by-date
Node.js API to get top Reddit posts by date

[![https://nodei.co/npm/reddit-by-date.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/reddit-by-date.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/reddit-by-date)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/darthbatman/billboard-top-100)


# install

```
npm install reddit-by-date
```

# example

```js
var redditByDate = require('../reddit-by-date.js');

// month, day, year, subreddit

// month [ 0 -> 11 ] = [ January -> December ]

redditByDate.getPosts(3, 4, 2016, "news", function(err, posts){

	console.log(posts);

});
```

# api

### getPosts(month, day, year, subreddit, callback)

Type: `function`

```month``` number (integer from 0 to 11)

```day``` number (integer from 0 to 31)

```year``` number (integer)

```subreddit``` string (name of subreddit)

```callback``` function

Returns array of top posts in subreddit for requested date. 

### posts

Type: `array`

Post objects.

### postObject.subreddit

Type: `string`

Name of subreddit.

### postObject.id

Type: `string`

ID of subreddit.

### postObject.author

Type: `string`

Author of post.

### postObject.name

Type: `string`

Unique name identifier of subreddit (e.g. t3_4d7lw5).

### postObject.score

Type: `number`

Score of post.

### postObject.subreddit_id

Type: `string`

Unique subreddit identifier of subreddit (e.g. t5_2qh3l).

### postObject.downs

Type: `number`

Number of downvotes on post.

### postObject.ups

Type: `number`

Number of upvotes on post.

### postObject.permalink

Type: `string`

Permalink of post.

### postObject.created

Type: `number`

Time of creation in milliseconds from January 1, 1970.

### postObject.url

Type: `string`

URL referenced by post.

### postObject.title

Type: `string`

Title of post.

### postObject.num_comments

Type: `number`

Number of comments on post.

### postObject.subreddt_type

Type: `string`

Type of subreddit.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)