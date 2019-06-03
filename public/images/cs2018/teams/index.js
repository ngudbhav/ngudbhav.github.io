var serve = require('express');
var path = require('path');
var app = serve();
var nodemailer = require('nodemailer');
var fs = require('fs');
app.use(serve.static('public'));
app.use('', serve.static(path.join(__dirname + '')));
app.set('port', (process.env.PORT || 3000));
var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'ngudbhavtest@outlook.com',
        pass: 'NGUdbhav'
    }
});
app.get('/', function(req, res, next){
	res.sendFile((path.join(__dirname+'/comingsoon.html')));
});
app.get('/test', function(req, res, next){
	res.sendFile((path.join(__dirname+'/gdg.html')));
});
app.get('/contact', function(req, res, next){
	var mailOptions = {
    	from: 'ngudbhavtest@outlook.com',
    	to: 'ngudbhav05@hotmail.com',
    	subject: 'Feedback my wesbite',
    	text: 'Hello '+req.query.name+ ' '+ req.query.message + ' by '+req.query.email
	};
	transporter.sendMail(mailOptions, function(error, info){
    	if(error){
        	console.log(error);
        	res.send("0");
    	}
    	else{
    		console.log('Message sent: ' + info.response);
    		res.send("1");
    	}
	});
});
var server = (app).listen(app.get('port'), function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("running\n");
    console.log("host working"+host+"\n");
    console.log("port working on" +port);
});