import React from 'react';
import $ from 'jquery';

class RecipeAdder extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
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
    // let form = $(event.target);
    // let url = form.find('input[name=url]').val();
    // let title = form.find('input[name=title]').val()

    $.ajax({
      url: '/recipes',
      method: 'POST',
      data: {url: this.state.url, title: this.state.title}
    })
    .done((recipe) => {
      // console.log('recipeAdder.js post succes:', recipe);
      this.props.refreshRecipes();
      this.setState({url: ''});
      this.setState({title: ''});
    })
    .fail(function(data){
      console.log('recipeAdder.js post falure');
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            placeholder="Enter a recipe Title!"
          />
          <br></br>
          <input
            type="text"
            value={this.state.url}
            name="url"
            onChange={this.handleChange}
            placeholder="Paste a recipe URL"
          />
          <input type="submit" value="Add Recipe"/>
        </form>
      </div>
    );
  }
}

export default RecipeAdder;

