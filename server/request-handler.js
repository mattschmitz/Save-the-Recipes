const express = require('express');
// var request = require('request');
const db = require('../db/config.js');
const Recipe = require('../db/recipe.js');

exports.fetchRecipes = function(req, res) {
  Recipe.find({}).exec(function(err, links){
    console.log('in reqhandle - links:', links);
  });
  db.getFakeRecipes(function(err, recipes){
    res.status(200).send(recipes);
  });
};

exports.addRecipe = function(req, res) {
  console.log('in req-handler adding recipe:', req.body);
  res.status(201).end();
  // console.log('in req-handler adding recipe, req.body:', req.body)
}