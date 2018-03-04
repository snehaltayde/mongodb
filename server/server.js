var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoode');
var {Todo} = require('./models/todos');
var {UserNew} = require('./models/users');
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  console.log(req.body);

var todo = new Todo({
  text: req.body.text
});


  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos) =>{
    res.send({todos})
  }, (err) => {
    res.status(400).send(err);
  });

});

app.get('/todos/:id', (req, res) => {
var id = req.params.id;

  if(!ObjectId.isValid(id)){
res.status(404);
  }
  Todo.findById(id).then((todo) => {
    res.send({todo});
  }, (err) =>{
    res.status(400);
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectId.isValid(id)){
    res.status(400).send();
  };

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(400).send();
    } else {
      return res.status(200).send('Deleted', todo);
    }
  }).catch((e) => {
    res.status(400).send();
  });


});
app.listen(3000, () =>{
  console.log('Server Started at Port 3000');
});
