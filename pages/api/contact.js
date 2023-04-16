export default function handler(req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'ademomailer@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: 'ademomailer@gmail.com',
        to: 'anujin.munhbat@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    res.status(200)
  }