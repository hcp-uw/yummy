import React from "react";
import './Components.css'

function RecipeCard(props) {
    const { recipe } = props;

    return (
        <div className="General-card">
            <h2>{recipe.name}</h2>
            <p>Preparation Time: {recipe.prep_time}</p>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <a href={recipe.link} target="_blank" rel="noopener noreferrer">
                Recipe Link
            </a>
        </div>
      );
}

export default RecipeCard;