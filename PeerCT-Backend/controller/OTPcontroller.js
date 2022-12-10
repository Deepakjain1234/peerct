const nodemailer = require("nodemailer")
const model = require("./../models")
const otp = model.peerCTOTP;
otp.destroy({
  where: {},
  truncate: true
})

function mailsent(email, otp) {
  var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'Peer-CT@outlook.com',
      pass: 'College@ct1'
    }
  });
  var mailOptions = {
    from: 'Peer-CT@outlook.com',
    to: email,
    subject: 'Sending Email using Node.js',
    html: `<h1>Welcome</h1><h2>OTP ${otp}</h2><h3>Thanks & Regards ,<br> PeerCT</h3>`
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports.requestOTP = (req, res) => {
  let OTP = Math.floor(100000 + Math.random() * 900000);
  otp.create({ email: req.body.email, otp: OTP }).then(() => {
    try {
      mailsent(req.body.email, OTP);
      console.log(req.body.email, OTP);

      return res.send("Kindly check the mail for OTP.")
    } catch (err) {
      // session.otp = null
      return res.json(err)
    }
  }).catch(err=>{
    console.log(err)
  })
}

module.exports.verifyOTP = (req, res) => {
  otp.findOne({
    where: {
      email: req.body.email, otp: req.body.otp
    }
  }).then((data) => { if (data)
     {
      otp.destroy({
        where: {
          email: req.body.email
        }
      }).then(()=>{return res.json("Email verified")} 
      )
    }
     else {
      otp.destroy({
        where: {
          email: req.body.email
        }
      })
      
      let OTP = Math.floor(100000 + Math.random() * 900000);
      otp.create({ email: req.body.email, otp: OTP }).then(() => {
        try {
          mailsent(req.body.email, OTP);
          console.log(req.body.email, OTP);
          return  res.send("this otp is wrong, new otp is sent to your mail" );

        } catch (err) {
          
          console.log(err)
          
        }
      })
    
        .catch(err=>{
          console.log(err)
        })
    
    }
     
    
    })
  


}