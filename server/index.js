const express = require('express');
const handler = require('./request-handler.js');
const bodyParser = require('body-parser');

const app = express();

//set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.get('/recipes', handler.fetchRecipes);
app.post('/recipes', handler.addRecipe);

//start server
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
})
