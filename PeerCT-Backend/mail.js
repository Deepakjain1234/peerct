
const nodemailer = require("nodemailer")
function mailsent(email,otp){
    var transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'Peer-CT@outlook.com',
        pass: 'College@ct1'
      }
    });
    var mailOptions = {
      from: 'Peer-CT@outlook.com',
      to: email,
      subject: 'Sending Email using Node.js',
      html: `<h1>Welcome</h1><h2>OTP ${otp}</h2><h3>Thanks & Regards ,<br> E Nursery</h3>`
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

mailsent("deeepakjain132@gmail.com",382989)