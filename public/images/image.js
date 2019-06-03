var j = require("jimp");
j.read("favicon.png", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(180,180)
		.write("favicon.png");
		console.log("done");
});