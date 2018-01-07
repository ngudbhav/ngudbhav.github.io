var j = require("jimp");
j.read("favicon.png", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(200,200)//154x130
		.write("favicon.png");
		console.log("done");
});