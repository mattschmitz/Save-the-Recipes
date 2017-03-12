import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CookBook from './components/CookBook.jsx'
import RecipeAdder from './components/RecipeAdder.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes(){
    $.ajax({
      url: '/recipes',
      type: 'GET'
    })
    .done((recipes) => {
      console.log('index.jsx success, recipes: ', recipes);
      this.setState({
        recipes: recipes
      })
    })
    .fail(function(data){
      console.log('index.jsx failer - response: ', data);
    })
  }

  render() {
    return (
      <div>
        <h1>Save the Recipes!</h1>
        <RecipeAdder refreshRecipes={this.getRecipes.bind(this)}/>
        <CookBook recipes={this.state.recipes}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));