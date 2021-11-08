const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
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
  to: "krystynsmith@hotmail.com",
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

//database
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//displaying the server and where it is listening to
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});

//logging in and database secuirty
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server started...'));
});
