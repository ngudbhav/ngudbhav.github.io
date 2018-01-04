var serve = require('express');
var path = require('path');
var app = serve();
var GitHub = require('gh.js');
var fs = require('fs');
var https = require('https');
var httpsRedirect = require('express-https-redirect');
var gh = new GitHub({
    token: '------Github API KEY---------'
});
gh.get('users/ngudbhav', (err, repos) => {
    //console.log(err || repos);
});
gh.get('users/ngudbhav/repos', {
    all: (err, pageRepos, currentPage) => {
        console.log("Fetched Page" + currentPage);
    }
}, (err, repos) => {
     //console.log(err || repos);
});
var name;
var email;
var nodemailer = require('nodemailer');
var bodymsg;
app.use('/', httpsRedirect());
app.use(serve.static('public'));
app.use('', serve.static(path.join(__dirname + '')));
app.set('port', (process.env.PORT || 443));
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
        user: '----Email-ID-----',
        pass: '----Password----'
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: '----Sender----', // sender address (who sends)
    to: '----Recipient----', // list of receivers (who receives)
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
})