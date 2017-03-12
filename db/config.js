var mongoose = require('mongoose');

//set mongoose promises to es6 promises: 
mongoose.Promise = global.Promise;

mongoURI = 'mongodb://localhost/recipedb';
mongoose.connect(mongoURI);

//run in seperate terminal window using 'mongod'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function () {
  console.log('Mongoose connected successfully!');
});

var getFakeRecipes = function(callback){
  var recipes = [
        {title:'Chicken Parmesan', url: 'http://asdfasdfChicken'},
        {title:'Beef Stew', url: 'http://asdfasdfBeeef'},
        {title:'Mashed Taters', url: 'http://asdfasdfTaterss'},
      ]
  callback(null, recipes);
}

module.exports = db;
module.exports.getFakeRecipes = getFakeRecipes;