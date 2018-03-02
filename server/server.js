var express = require('express');
var bodyParser = require('body-parser');

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

app.listen(3000, () =>{
  console.log('Server Started at Port 3000');
});
