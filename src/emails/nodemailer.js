const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'tomirpdevelopment@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN

    }
})

const mail = {
    from: 'Rachmawan Pratomo <tomirpdevelopment@gmail.com>',
    to: 'tomisartomo@gmail.com',
    subject: 'DIGOYANG',
    html: '<h1>BAEK BAEK KALO JALAN PAOK!</h1>'
}

transporter.sendMail(mail, (err, res) => {
    if(err) return console.log(err.message)

    console.log("Email berhasil terkirim");
})