const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    service: "hotmail",
    auth: {
      user: "spaceapp1234567@outlook.com",
      pass: "password12345"
    }
  });
const options = {
  from: "spaceapp1234567@outlook.com",
  //to: "USER INPUT NEEDS TO BE HERE",
  subject: "Test Email!!!",
  text: "Is this thing working?"
}

transporter.sendMail(options, function (err, info) {
  if(err){
    console.log(err);
    return;
  }
  console.log("Sent: " + info.response);
});