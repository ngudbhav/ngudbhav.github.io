var j = require("jimp");
j.read("android-chrome-256x256.png", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(200,200)
		.write("android-chrome-200x200.png");
		console.log("done");
});