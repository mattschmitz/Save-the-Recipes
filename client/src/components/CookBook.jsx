import React from 'react';
import RecipeEntry from './RecipeEntry.jsx'

class CookBook extends React.Component {
  render() {
    var count = 0;
    var rows = this.props.recipes.map((recipe) => 
      <RecipeEntry key={count++} recipe={recipe}/>
    );
    return (
      <div>
        <h2>My CookBook:</h2>
        <div>
          {rows}
        </div>
      </div>
    );
  }
}

export default CookBook;
