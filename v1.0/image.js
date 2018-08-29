var j = require("jimp");
j.read("UG.jpg", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(900,700)
		.write("UGnew.png");
		console.log("done");
});