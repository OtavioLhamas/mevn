const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nameSchema = new Schema({
  first_name: String,
  last_name: String
});

const UserSchema = new Schema({
  name: {
    type: nameSchema,
    required: [true, 'Let us know you by adding your name!']
  },
  email: {
    type: String,
    required: [true, 'Please add your email as well.']
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{5}-\d{4}/.test(v);
      },
      message: '{VALUE} is not a valid phone number!'
    }
  }
});

const User = mongoose.model("User", UserSchema)
module.exports = User

const userResource = new User({
  name: 'John Doe',
  email: 'john@doe.com'
})

userResource.save((error) => {
  if(error)
    console.log(error);

  res.send({
    success: true,
    code: 200,
    msg: "User added!"
  })
})

User.find({}, 'name email', function (error, users) {
  if (error) { console.error(error); }
  res.send({
    users: users
  })
})

User.findById(1, 'name email', function (error, user) {
  if (error) { console.error(error); }
  res.send(user)
})

User.findById(1, 'name email', function (error, user) {
  if (error) { console.error(error); }

  user.name = 'Peter'
  user.email = 'peter@gmail.com'

  user.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true
    })
  })
})

User.findOneAndUpdate({name: 'Peter'}, { $set: { name: "Sara" } },
function(err){
  if(err){
    console.log(err);
  }
});

User.remove(
  { _id: 1 }, 
  function(err){
    if (err)
      res.send(err)
    
    res.send({
      success: true
    })
  }
)

User.findOneAndRemove(
  { name: 'Anita' }, 
  function(err, user){
    if (err)
      res.send(err)
    
    res.send({
      success: true,
      user: user
    })
  }
)

User.findByIdAndRemove(
  1, 
  function(err){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  }
)
