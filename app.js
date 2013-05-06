/**
 * Module dependencies.
 */

var websocketList = [];
var old_number_of_users = 0;

var express = require('express'), routes = require('./routes'), user = require('./routes/user'), mobile = require('./routes/mobile'), http = require('http'), path = require('path'), gcm = require('node-gcm');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
//var app = module.exports = express.createServer(),
//var io = require('socket.io').listen(app, { log: true });

// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/mobile', mobile.index);
app.post('/newloc', function(req, res) {
	var data = req.body.data;

	
	console.log(data);
	
	for (var i = 0; i < websocketList.length; i++) {
		websocketList[i].emit("data", data);
	}
});

server.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

io.sockets.on('connection', function(socket) {
	websocketList.push(socket);
	if (old_number_of_users == 0 && websocketList.length > 0) {
		console.log("Send GCM start tracking");
	} else if (old_number_of_users > 0 && websocketList.length > 0){
		console.log("stop tracking");
	}
	
	
	console.log(websocketList.length + " connections");
	old_number_of_users = websocketList.length;
})

io.sockets.on('disconnect', function() {
	websocketList.splice(websocketList.indexOf(socket), 1);
	console.log(websocketList.length + " connections");
});
