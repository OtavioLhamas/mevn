const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'movieratingapplicationsecretkey';

const app = express();
const router = express.Router();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// connect to mongodb
mongoose.connect('mongodb://localhost/movie_rating_app', function() {
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

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});