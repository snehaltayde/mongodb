const {MongoClient, ObjectID} = require('mongodb');
//Connecting To database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
 console.log('Cannot Establish Connection', err);
  }
  console.log('Connection Successfull');

//Finding USers with IDS

// db.collection('Todos').find({
//
//   _id: new ObjectID('5a951821f93ffe3cdbf658cc')
//
// }).toArray().then((docs) =>{
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//
//   console.log('Unable to fetch todos', err);
// });


//Finding Users With Name
// db.collection('Users').find({age : 25}).toArray().then((docs) => {
//
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Error Could not find', err);
// });
//Finding User Counts

db.collection('Users').find().count().then((count) => {
console.log(count);

});
  //db.close();


});
