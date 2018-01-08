var serve = require('express');
var path = require('path');
var app = serve();
var name;
var email;
var nodemailer = require('nodemailer');
var bodymsg;
var bodyParser = require('body-parser');
app.use(serve.static('public'));
app.use('', serve.static(path.join(__dirname + '')));
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
        user: "----Sender's Address----",
        pass: "----Sender's Password----"
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: "----Sender's Address----", // sender address (who sends)
    to: "-----Reciever's address-----", // list of receivers (who receives)
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
var server = app.listen(8000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("running");
})
