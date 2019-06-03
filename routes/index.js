var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res){
    res.render('index');
});
router.get('/cs2018/', function(req, res){
    res.render('cs2018');
});
router.get('/softpedia/', function(req, res){
    res.redirect('https://www.softpedia.com/get/Internet/Servers/Database-Utils/TriCO.shtml');
});
router.get('/electronjs/', function(req, res){
    res.redirect('https://electronjs.org/apps/trico');
});
router.get('/download/trico/', function(req, res){
    res.redirect('https://www.softpedia.com/get/Internet/Servers/Database-Utils/TriCO.shtml#download');
});
router.get('/npm/mysql/', function(req, res){
    res.redirect('https://www.npmjs.com/package/excel-to-mysql');
});
router.get('/npm/mongo/', function(req, res){
    res.redirect('https://www.npmjs.com/package/excel-to-mongodb');
});
router.get('/download/android/', function(req, res, next){
    res.download(__dirname + '/app.apk');
});
router.get('/cs2019/', function(req, res){
    res.render('cs2019');
});
router.post('/contact/', function(req, res, next) {
    var mailOptions = {
        from: 'ngudbhavtest@outlook.com', // sender address (who sends)
        to: 'ngudbhav05@hotmail.com', // list of receivers (who receives)
        subject: 'Feedback my wesbite', // Subject line
        text: 'Hello '+req.body.kname+ ' '+ req.body.kmsg + ' by '+req.body.kemail // plaintext body
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else{
        }
        res.redirect('/');
    });
});
var name;
var email;
var bodymsg;
router.post('/sending', function (req, res) {
	name = req.body.name;
	email = req.body.email;
	bodymsg = req.body.bodymsg;
	res.render('sent');
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

module.exports = router;
