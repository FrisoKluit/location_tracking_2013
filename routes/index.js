var userlist = []

exports.index = function(req, res) {
	res.render('index', {
		title : 'Express',
		scripts : ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', '/socket.io/socket.io.js', '/javascripts/index.js']
	});
};

exports.newloc = function(req, res) {
	res.send()

	res.send("OK");
}