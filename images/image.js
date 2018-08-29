var j = require("jimp");
j.read("./hg/7.jpg", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(263,337)//154x130
		.write("./hg/7.jpg");
		console.log("done");
});