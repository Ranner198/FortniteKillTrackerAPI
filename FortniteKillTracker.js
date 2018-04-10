var request = require('ajax-request');

request('url', function(err, res, body) {});

request({
	url:'https://api.fortnitetracker.com/v1/profile/pc/Ranner198',
	method: 'GET',
	data: {
    key: "Wins"
 },
 	headers: {"TRN-Api-Key": "2d4d442a-937a-4e08-987e-205536a23cde"},

}, function(err, res, body) {
  	var totalWins = JSON.parse(body);

  	console.log(totalWins.lifeTimeStats);
 	
  	
 	
});