const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const session = require('express-session')
const passport = require('passport');
const User = require('./models/UserModel');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const config = require('./config/Config.js')
const app = express();
const router = express.Router();

app.use(history());
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use(session({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false
  },
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false,
}))

app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(config.DB, function () {
    console.log('Connection has been made');
  })
  .catch(error => {
    console.error('App starting error', error.stack);
    process.exit(1);
  });

// Include controllers
fs.readdirSync('controllers').forEach(function (file) {
  if (file.substr(-3) == '.js') {
    const route = require('./controllers/' + file)
    route.controller(app)
  }
})

app.use(serveStatic(__dirname + '/dist'));

router.get('/api/currentUser', isLoggedIn, function (req, res) {
  console.log(req);
  if (req.user) {
    res.send({
      currentUser: req.user
    })
  } else {
    res.status(403).send({
      success: false,
      msg: 'Unauthorized'
    });
  }
})

function isLoggedIn(req, res, next) {
  console.log(req)
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
  console.log('error! auth failed');
}

router.get('/api/logout', async (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/', function (req, res) {
  res.json({
    message: 'API Initialized!'
  });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
module.exports = app.listen(port, function () {
  console.log(`api running on port ${port}`);
});
