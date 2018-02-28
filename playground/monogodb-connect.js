const MongoClient = require('mongodb').MongoClient;
//Connecting To database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
 console.log('Cannot Establish Connection', err);
  }
  console.log('Connection Successfull');
// db.collection('Todos').insertOne({
// text: 'hello world',
// married: false
//
// }, (err, results) =>{
//   if(err){
//     return console.log('Unable To insert Todo', err);
//   }
//   console.log(JSON.stringify(results.ops, undefined, 2));
// });
db.collection('Users').insertOne({
  name: 'Snehal',
  age: 25,
  location: 'Surat India'
}, (err, results)=> {
if(err){
  console.log('Cannot insert Data', err);
}
console.log(JSON.stringify(results.ops, undefined, 2));
});

  db.close();


});
