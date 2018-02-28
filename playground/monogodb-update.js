const {MongoClient, ObjectID} = require('mongodb');
//Connecting To database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
 console.log('Cannot Establish Connection', err);
  }
  console.log('Connection Successfull');

db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a9613b8f93ffe3cdbf66d81')},
{
$set : {
  name: "Snehal"
},
$inc:  {
  age : 1
}
},
{

returnOriginal: false

}).then((result) => {
  console.log(result);
});
  //db.close();


});
