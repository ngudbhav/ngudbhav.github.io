var j = require("jimp");
j.read("images/insta.png", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(128,128)
		.write("insta.png");
		console.log("done");
});