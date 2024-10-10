import nodemailer from 'nodemailer';


var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth:{
        user: 'criminal87654@gmail.com',
        pass: 'epal mpvi gmjb ssau'
    }
});

var mailOptions = {
    from: 'criminal87654@gmail.com',
    to: 'rohxama@gmail.com',
    subject: 'Sending email using node js library',
    text: 'Hello jee'
}

transporter.sendMail(mailOptions, function (error, info) {
    if(error){
        console.log(error);
    } else{
        console.log('Email sent : ' + info.response);
    }
})