"use strict";
const express    = require('express');
const cors       = require('cors');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const email      = require('emailjs/email');
const actions    = require('nodemailer');
const routes     = require('express').Router();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('The server started on port 3000');
});

app.post('/sendmail', (req, res) => {
    console.log('request came');
    let user = req.body;
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({error: 'Failed to send email'});
        } else {
            console.log('Email has been sent');
            res.send(info);
        }
    });
});

let sendMail = (user, callback) => {
    const transporter = nodeMailer.createTransport({
        host  : 'smtp.gmail.com',
        port  : 587,
        secure: false,
        auth  : {
            user: '<sender email>',
            pass: '<password>'
        }
    });

    const mailOptions = {
        from   : `"<Sender’s name>", "<Sender’s email>"`,
        to     : `<${user.email}>`,
        subject: '<Message subject>',
        html   : '<h1>And here is the place for HTML</h1>'
    };
    transporter.sendMail(mailOptions, callback);


sendMail = (req, res) => {
    const server = email.server.connect({
        user    : '<sender’s-email>',
        password: '<sender’s-password>',
        host    : 'yahellonchik@gmail.com',
        ssl     : true,
        port    : 465
    });

    server.send({
        text      : 'Your message body text',
        from      : '<sender’s email>',
        to        : '<recipient’s email>',
        subject   : 'Your message subject',
        attachment:
            [
                {
                    data       : '<html><strong>A bit of HTML text</strong></html>',
                    alternative: true
                },
                {
                    path: 'user/desktop/file.pdf',
                    type: 'application/pdf',
                    name: 'renamed.pdf'
                }
            ]
    }, function (err, message) {
        if (err)
            console.log(err);
        else
            res.json({
                success: true,
                msg    : 'sent'
            });
    });
};
    routes.post('/sendmail', actions.sendMail);
};


