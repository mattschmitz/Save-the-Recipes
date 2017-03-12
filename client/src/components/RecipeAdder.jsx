import React from 'react';
import $ from 'jquery';

class RecipeAdder extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    $.ajax({
      url: '/recipes',
      method: 'POST',
      data: {url: this.state.value}
    })
    .done((recipe) => {
      // console.log('recipeAdder.js post succes:', recipe);
      this.props.refreshRecipes();
      this.setState({value: ''});

    })
    .fail(function(data){
      console.log('recipeAdder.js post falure');
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter a recipe URL"
          />
          </label>
          <input type="submit" value="Add Recipe"/>
        </form>
      </div>
    );
  }
}

export default RecipeAdder;

