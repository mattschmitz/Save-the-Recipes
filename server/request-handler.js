const express = require('express');
// var request = require('request');
const db = require('../db/config.js');
const Recipe = require('../db/recipe.js');

exports.fetchRecipes = function(req, res) {
  Recipe.find({}).exec(function(err, recipes){
    res.status(200).send(recipes);
  });
  // //Uncomment these lines to clear database
  // Recipe.remove({}, function (err) {
  //   if (err) {
  //     console.log('request-handler.js remove error:', err);
  //   }
  // });
};

exports.addRecipe = function(req, res) {
  var url = req.body.url;

  //TODO: check if valid url

  //TODO: get url title

  var newRecipe = new Recipe({
    url: url,
    title: 'New Recipe!'
  });
  newRecipe.save(function(err, newRecipe){
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('in req-handler adding recipe:', url);
      res.status(201).send(newRecipe);
    }
  })

}

