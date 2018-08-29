var serve = require('express');
var path = require('path');
var app = serve();
var fs = require('fs');
var https = require('https');
const helmet = require('helmet')
app.use(helmet());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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
app.set('port', (process.env.PORT || 443));
app.get('/process_get', function (req, res) {
	name = req.query.name;
	email = req.query.email;
	bodymsg = req.query.bodymsg;
	res.redirect('sent.html');
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
    var mailOptions = {
        from: 'ngudbhavtest@outlook.com', // sender address (who sends)
        to: 'ngudbhav05@hotmail.com', // list of receivers (who receives)
        subject: 'Feedback my wesbite', // Subject line
        text: 'Hello '+name+ ' '+ bodymsg + ' by '+email // plaintext body
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
       console.log('Message sent: ' + info.response);
    })
});
var options = {
    key:fs.readFileSync('ngudbhav.key'),
    cert:fs.readFileSync('ngudbhav_me_combine.crt')
};
var server = (options, app).listen(app.get('port'), function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("running\n");
    console.log("host working"+host+"\n");
    console.log("port working on" +port);
});
