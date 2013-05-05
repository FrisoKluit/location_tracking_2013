exports.index = function(req, res){
  res.render('mobile', { title: 'Express' });
};

exports.newloc = function(req, res) {
	res.send("OK");
}
