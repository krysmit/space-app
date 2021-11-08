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
  //to: newsemail information goes here,
  subject: "Welcome to the Astronomy Weekly Newsletter",
  text: "Thank you for singing up! 🪐" 
}

function sendEmail() { 
transporter.sendMail(options, function (err, info) {
  if(err){
    console.log(err);
    return;
  }
  console.log("Sent: " + info.response);
});
}

document.getElementById("emailsub").addEventListener("click", sendEmail);
document.getElementById("emailsub").addEventListener("click", dispThanks);

function dispThanks() {
  document.getElementById("thankyou").innerHTML = "Thanks for signing up!";
}