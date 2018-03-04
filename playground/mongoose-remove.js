const {mongoose} = require('./../server/db/mongoode.js');
const {Todo} = require('./../server/models/todos.js');
const {User} = require('./../server/models/users.js')

//Todo.remove({}).then((results) => {
  //consloe.log(results);
//});

//Todo.findOneAndRemove({
//   _id:id
// }).then((results) => {
//   console.log('results');
// });
var id = "5a9b8d3f10715504a2e4592c";
Todo.findByIdAndRemove(id).then((results) => {
  console.log('Deleted Todo', results);
})
