const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const clientRouter = require('./routes/clientRoutes');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'habibaashraf152@gmail.com',
            pass: 'jflb axrx gouy zafx'
        }
    });

    let mailOptions = {
        from: 'habibaashraf152@gmail.com',
        to: 'habibaashraf152@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        }
    });
});


app.use('/clients', clientRouter);


module.exports = app; // Export the app
