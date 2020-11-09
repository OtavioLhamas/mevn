const { response } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: {
      firstName: String,
      lastName: String
    },
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

// const userResource = new User({
//   name: { firstName: 'John', lastName: 'Doe'},
//   email: 'john@doe.com'
// })

// userResource.save((error) => {
//   if (error) { console.log(error); }
// })

// User.find({}, 'name email', function (error, users) {
//   if (error) { console.error(error); }
//   console.log('All Users:', users);
// });

// async function findById() {
//   const id = await User.find({}, function (error, users) {
//     if (error) { console.error(error); }
//     return users[0].id
//   });

//   console.log('Frist User ID:', id)

//   User.findById(id, 'name email', function (error, user) {
//     if (error) { console.error(error); }
//     console.log('Find By Id:', user);
//   })

//   User.findById(id, 'name email', function (error, user) {
//     if (error) { console.error(error); }
//     if (!user) { return console.log('user not found'); }
 
//     user.name = { firstName: 'Peter', lastName: 'Jackson' };
//     user.email = 'peter@gmail.com';
  
//     user.save(function (error) {
//       if (error) {
//         console.log(error)
//       }
//     })
//   })
// }
// findById()

// User.findOneAndUpdate({name: { firstName: 'Peter', lastName: 'Jackson' }}, { name: { firstName: 'Sara', lastName: 'Maria' }},
// function(err, user){
//   if(err){
//     console.log(err);
//   }
//   console.log(user)
// });


// User.findOneAndRemove(
//   { name: 'Anita' }, 
//   function(error, user){
//     if (error)
//       console.log(error)

//     console.log(user)
//   }
// )
