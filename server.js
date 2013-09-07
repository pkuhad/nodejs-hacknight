var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8888);

app.use('/static', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {

	(function event_loop(){
		setTimeout(function(){
			var random_number = Math.floor(Math.random()*500)
			socket.emit('number', { number: random_number });
			event_loop();
		}, 1000);
	})();

 	socket.on('my other event', function (data) {
    	console.log(data);
  	});

});


