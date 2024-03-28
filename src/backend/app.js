const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // Change this to your desired port

// Middleware to parse JSON and URL-encoded bodies
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express route for handling form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'habibaashraf152@gmail.com', // Your Gmail email address
            pass: 'jflb axrx gouy zafx' // Your Gmail password (consider using environment variables)
        }
    });

    // Email message
    let mailOptions = {
        from: 'habibaashraf152@gmail.com', // Sender address (must be the same as authenticated user)
        to: 'habibaashraf152@gmail.com', // Recipient address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
            
        } else {
            console.log('Email sent:', info.response);
            
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
            alert ( 'Email sent successfully!');
            nav
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
