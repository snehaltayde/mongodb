const {mongoose} = require('./../server/db/mongoode.js');
const {Todo} = require('./../server/models/todos.js');
const {User} = require('./../server/models/users.js')

// var id = '5a990269fe02a3c23d09dd42';
// //Returns Array
// Todo.find({
// _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
// //Returns Object Data
// Todo.findOne({
//
//   _id: id
// }).then((todo) =>{
//   if(!todo){
//     console.log('Id not Found');
//   }
//   console.log('Todo', todo);
// }, (err) => {
//   console.log('Error Ocurred Invalid Id', err);
// })
//
// //
// Todo.findById(id).then((todo) => {
//   console.log('Todo By Id', todo);
// }, (err) => {
//   console.log('Invalid Id', err);
// });

var id = '5a96ad7d2fbb48e5505494ed';

User.find({
  _id :id
}).then((user) => {
  if(!user){
    console.log('User Not Found');
  }
  console.log('User Found', user);
}, (err) => {
  console.log('Error Found', err);
});

User.findOne({
  _id :id
}).then((user) => {
  if(!user){
    console.log('User Not FOund', err);
  }
  console.log('User Details', user.name);
});
User.findById(id).then((user) => {
  if(!user){
    console.log('User Not Found');
  }
  console.log('User Found', user.name);
}, (err) => {
  console.log('Error Occured', err);
})
