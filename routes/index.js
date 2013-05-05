var userlist = []

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.newloc = function(req, res) {
	res.send("OK");
}