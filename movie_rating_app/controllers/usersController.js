const User = require('../models/UserModel.js');

module.exports.controller = (app) => {
  // register a new user
  app.post('/users/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.mail;
    const password = req.body.password;
    const newUser = new User({
      name,
      email,
      password,
    });
    User.createUser(newUser, (error, user) => {
      if (error) {
        res.status(422).json({
          message: 'Something went wrong. Please try again after some time!',
        });
      }
      res.send({
        user
      });
    });
  });
};
