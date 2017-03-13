import React from 'react';

class RecipeEntry extends React.Component {
  render() {
    var url = 'http://allrecipes.com/recipe/241813/slow-cooker-belgian-chicken-booyah/?internalSource=staff%20pick&referringId=201&referringContentType=recipe%20hub&clickId=cardslot%204';
    return(
      <div className="recipe-entry">
        <a href={this.props.recipe.url}>
          <div className="recipe-title">
            {this.props.recipe.title}
          </div>
          <div className="recipe-url">
            {this.props.recipe.url}
          </div>
          <div className="recipe-notes">
            <div className="recipe-notes-title">
              Notes:
            </div>
            <div className="recipe-notes-body"> 
              {this.props.recipe.notes}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default RecipeEntry;