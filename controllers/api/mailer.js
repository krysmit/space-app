const router = require('express').Router();
const nodemailer = require('nodemailer');
console.log("I WORK!!!");
const transporter = nodemailer.createTransport(
  {
    service: "hotmail",
    auth: {
      user: "spaceapp1234567@outlook.com",
      pass: "password12345"
    }
  });





router.post('/send', (req, res) => {
  transporter.sendMail(req.body, function (err, info) {
    if(err){
      res.json(err);
      return;
    }
    console.log("Sent: " + info.response);
    res.json(info.response)
  });
})

module.exports = router;