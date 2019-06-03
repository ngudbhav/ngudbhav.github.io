var j = require("jimp");
j.read("./sponsors/INTERNITY_LOGO.png", function(err, lenna){
	if(err) throw err;
	else{
		lenna.resize(300, 300)//720x1280//4x2.5
		.write("./sponsors/INTERNITY_LOGO1.png");
		console.log("done");	
		}
});