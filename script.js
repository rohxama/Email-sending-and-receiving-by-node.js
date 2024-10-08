import nodemailer from 'nodemailer';


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'rohxama@gmail.com',
        pass: 'pmlh teem bwwy ycux'
    }
});

var mailOptions = {
    from: 'rohxama@gmail.com',
    to: 'criminal87654@gmail.com',
    subject: 'Sending email using node js library',
    text: 'Hello World'
}

transporter.sendMail(mailOptions, function (error, info) {
    if(error){
        console.log(error);
    } else{
        console.log('Email sent : ' + info.response);
    }
})