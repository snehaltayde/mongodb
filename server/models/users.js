var mongoose = require('mongoose');

var User = mongoose.model('User', {
name: {
  type: String,
  required: true
},
email: {
  type: String,
  trim: true,
  minlength: 1
}
});

// var UserNew = new User({
//   name: "Snehal",
//   email: "snehal@mediastic.in"
// });
//
// UserNew.save().then((doc) => {
//   console.log('Saved Successfully', doc);
// }, (err) =>{
//   console.log('Cannot Save', err);
// });

module.exports = {User}
