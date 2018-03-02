var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
text: {
  type: String
},
completed: {
  type: Boolean
},
completedAt:{
  type: Number
}

});

// var newTodo = new Todo({
//   text: 'Dancing',
//   completed: false,
//   completedAt: 12345667
// });
// 
// newTodo.save().then((doc) => {
//   console.log('Todo Saved', doc);
// }, (err) => {
//   console.log('Cannot Save Todo', err);
// });

module.exports = {Todo};
