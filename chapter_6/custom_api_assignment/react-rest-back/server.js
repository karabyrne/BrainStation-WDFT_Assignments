
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
let todos = [
    { text: 'learn angular', done: false, id: 1 },
    { text: 'write the content for the next module', done: false, id: 2 },
    { text: 'buy cheese', done: true, id: 3 },
    { text: 'buy milk', done: true, id: 4 }
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

app.get('/api/todos', (req, res) => {
	res.send(todos);
});

app.post('/add', function(req, res) {
    console.log(req.body);
    const newTodo = {text: req.body.text, done: false, id: todos.length + 1}
    console.log("newTodo = ", newTodo);
    todos.push(newTodo)
    res.send(todos);
});


