var serve = require('express');
var path = require('path');
var app = serve();
var GitHub = require('gh.js');
var fs = require('fs');
var https = require('https');
var gh = new GitHub({
    token: 'a59edc61cc3fc8b5146197cc3df1952e59657ae8'
});
gh.get('users/ngudbhav/repos', {
    all: (err, pageRepos, currentPage) => {
        console.log("Fetched Page" + currentPage);
    }
}, (err, repos) => {
     //console.log(err || repos);
});
app.get('/.well-known/pki-validation/A8B29992A58B4C1F5A463DC635DA8289.txt', function(req, res){
    res.download('A8B29992A58B4C1F5A463DC635DA8289.txt');
});
app.get('/', function(req, res){
    res.sendFile((path.join(__dirname+'/index.html')));
});
var name;
var email;
var nodemailer = require('nodemailer');
var bodymsg;
app.use(serve.static('public'));
app.use('', serve.static(path.join(__dirname + '')));
<<<<<<< HEAD
app.set('port', (process.env.PORT || 5000));
=======
app.set('port', (process.env.PORT || 443));
app.all(/.*/, function(req, res, next) {
  var host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "http://www." + host);
  }
});
>>>>>>> 826f76d4b31d7b37f9763f172565541c5e225510
app.get('/process_get', function (req, res) {
	// Prepare output in JSON format
		name = req.query.name;
		email = req.query.email;
		bodymsg = req.query.bodymsg;
	console.log(bodymsg);
    res.redirect('sent.html');
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

var server = (app).listen(app.get('port'), function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("running\n");
    console.log("host working"+host+"\n");
    console.log("port working on" +port);
<<<<<<< HEAD
});
=======
})
>>>>>>> 826f76d4b31d7b37f9763f172565541c5e225510
