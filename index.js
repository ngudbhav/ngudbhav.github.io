var serve = require('express');
var path = require('path');
var app = serve();
var name;
var email;
var nodemailer = require('nodemailer');
var bodymsg;
app.use(serve.static('public'));
app.use('', serve.static(path.join(__dirname + '')));
app.set('port', (process.env.PORT || 5000));
app.get('/process_get', function (req, res) {
	// Prepare output in JSON format
		name = req.query.name;
		email = req.query.email;
		bodymsg = req.query.bodymsg;
	console.log(bodymsg);
	// Create the transporter with the required configuration for Outlook
// change the user and pass !
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

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: 'ngudbhavtest@outlook.com', // sender address (who sends)
    to: 'ngudbhav05@hotmail.com', // list of receivers (who receives)
    subject: 'Feedback my wesbite', // Subject line
    text: 'Hello '+name+ ' '+ bodymsg + ' by '+email // plaintext body
};
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
    res.end("Submitted Successfully!");
})
});
var server = app.listen(app.get('port'), function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("running");
})
/*var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	fs.readFile('bio.html',function (err, data){
		res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
		res.write(data);
		res.end();
	});
}).listen(8000);*/
/*app.get('/bio.html', function (req, res) {
   res.sendFile( __dirname + "/" + "bio.html" );
})*/
