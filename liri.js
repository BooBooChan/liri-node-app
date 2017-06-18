//Twitter npm package
var Twitter = require('twitter');

//no need to make object of client variable as npm package dictates. We have all that on the keys.js page.

require(exports.twitterKeys);
var twitterKeys = [twitterKeys.consumer_key, twitterKeys.consumer_secret, twitterKeys.access_token_key, twitterKeys.access_token_secret];

var params = {screen_name: 'nodejs'};
twitterKeys.get('status/user_timeline', params, function(error, tweets, response) {
	if(!error) {
		console.log(tweets);
	};
});

//Spotify npm package
search: function (
	var spotifyParam = {
		type : 'artist OR album OR track',
		query: 'My search query',
		limit: 20
	},
	callback
){

};

var spotifyParam.search(
	{type: '', 
	query: '', 
	limit:20
	}, function(err, data){
		if(err) {
			return console.log(err);
		};
	console.log(data);
	};
});

//Request npm package for retrieving omdb api data

var request = require('request');
request(
	/*insert ombd api here*/, function (error, response, body){
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode);
		console.log('body', body);	
	}
);

var my-tweets
var spotify-this-song
var movie-this
var do-what-it-says
console.log("");
