var j = require("jimp");
j.read("heroku.png", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(40,40)//128x156
		.write("heroku.png");
		console.log("done");
});