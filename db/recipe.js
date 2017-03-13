const db = require('./config.js');
var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  title: String, 
  url: String,
  notes: String,
  imageUrl: String,
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;