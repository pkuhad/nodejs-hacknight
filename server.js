var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

// Initializing server
server.listen(8888);

app.use('/static', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  	res.sendfile(__dirname + '/index.html');
});

// Setting up Twitter
var Twit = require('twit');

var twit = new Twit({
  consumer_key: 'Pneh19GTogq3kTxWq9dr9Q',
  consumer_secret: '6umd0gXe3bz13GKGNg0ybfx6XlOhGyLp0IXgVEo',
  access_token: '26528955-a97TOXHTchFrbmsjH2e8tKaScjbyN7EekHr3zo4ph',
  access_token_secret: 'ffJR4aThNwg0knbQh9jZstNZCpg4HIsqTd2mgJE'
});

io.sockets.on('connection', function (socket) {

	(function event_loop(){
		setTimeout(function(){
			twit.get('search/tweets', { q: 'india', count: 100 }, function(err, reply) {
				console.log(err);
				var random_number = Math.floor(Math.random()*500)
				socket.emit('number', { number: random_number });
				socket.emit('tweet', { tweet: reply});
				event_loop();
			});
		}, 5000);
	})();

 	socket.on('my other event', function (data) {
    	console.log(data);
  	});

});


