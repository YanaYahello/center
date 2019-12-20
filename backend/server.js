const express    = require('express'),
      nodeMailer = require('nodemailer'),
      cors = require('cors'),
      bodyParser = require('body-parser');

const app = express();
app.use(cors({origin: "*"}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000;
app.listen(port, function(){
    console.log('Server is running at port: ', port);
});
app.get('/',  (req, res) => {
    res.render('index');
});
app.post('/send-email', (req, res) => {
    const userData = req.body;
    sendmail(userData, info => {
        console.log('the email was send)');
        res.send(info);
    });
});

async function sendmail(user, callback){
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, //true for 465 , false for other port
        auth: {
            user: 'yahellonchik@gmail.com',
            pass:''
        }
    });
    let mailOptions = {
        from: `first-name: ${user.firstName}, last-name: ${user.lastName}, email: ${user.email}`,
        to: 'yahellonchik@gmail.com',
        subject: 'letter form client',
        text: user.question,
        html: '<b>CENTER</b>'
    };

    let info = await transporter.sendMail(mailOptions);
    callback(info);
}
