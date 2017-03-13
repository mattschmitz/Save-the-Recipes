import React from 'react';
import $ from 'jquery';

class RecipeAdder extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      notes: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log('target', event.target);
    let newStateItem = {}
    newStateItem[event.target.name] = event.target.value;
    this.setState(newStateItem);
  }

  handleSubmit(event) {
    event.preventDefault();

    $.ajax({
      url: '/recipes',
      method: 'POST',
      data: {
        url: this.state.url, 
        title: this.state.title,
        notes: this.state.notes
      }
    })
    .done((recipe) => {
      // console.log('recipeAdder.js post succes:', recipe);
      this.props.refreshRecipes();
      this.setState({
        url: '',
        title: '',
        notes: ''
      });
    })
    .fail(function(data){
      console.log('recipeAdder.js post falure');
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend> New Recipe </legend>
            <label>Title: </label> 
            <input 
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
              placeholder="Enter a recipe name"
            />
            <br></br>
            <label>Url: </label> 
            <input
              type="text"
              value={this.state.url}
              name="url"
              onChange={this.handleChange}
              placeholder="Paste it's url"
            />
            <br></br>
            <label>Notes: </label> 
            <textarea
              rows="6"
              cols="60"
              type="text"
              value={this.state.notes}
              name="notes"
              onChange={this.handleChange}
              placeholder="...and add some notes!"
            />
            <input type="submit" value="Add Recipe"/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default RecipeAdder;

