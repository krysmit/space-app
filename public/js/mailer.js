document.getElementById("emailsub").addEventListener("click", function() {
    const options = {
      from: "spaceapp1234567@outlook.com",
      to: document.getElementById("newsemail").value,
      subject: "Welcome to the Astronomy Weekly Newsletter",
      text: "Thank you for singing up! 🪐" 
    }
    sendEmail(options);
    dispThanks();
  
  });

function sendEmail(options) {
    fetch("/api/mail/send", {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(options)
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}


function dispThanks() {
    document.getElementById("thankyou").innerHTML = "Thanks for signing up!";
  }