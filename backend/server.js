const express    = require('express'),
      nodeMailer = require('nodemailer'),
      cors       = require('cors'),
      bodyParser = require('body-parser');

const app = express();
app.use(cors({origin: '*'}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000;
app.listen(port, function () {
    console.log('Server is running at port: ', port);
});
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/send-email', (req, res) => {
    const userData = req.body;
    sendmail(userData, info => {
        console.log('the email was send)');
        res.send(info);
    });
});

async function sendmail(user, callback) {
    let transporter = nodeMailer.createTransport({
        service: 'Gmail',
        auth   : {
            user: 'yana.yahello@inventorsoft.co',
            pass: 'uyckrtzkqjsyansm'
        },
        tls    : {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from   : `email: ${user.email}`,
        to     : `${user.email}`,
        subject: 'letter form client',
        text: user.question,
        html   : '<b>CENTER</b>' +
            `<p>Имя: ${user.firstName}</p>
             <p>Фамилия: ${user.lastName}</p>
             <p>Email: ${user.email}</p>
             <p>Question: ${user.question}</p>`
    };

    let info = await transporter.sendMail(mailOptions);
    callback(info);
}
