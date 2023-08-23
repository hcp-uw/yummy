import React from "react";
import Recipes from "../data/TestRecipes.json"
import RecipeCard from "./RecipeCard";
import './Components.css'


function RecipeDisplay() {

    return (
        <div className="Recipe-Display">
            <div className="Recipe-list-header">
                <h1>Recipes</h1>
            </div>
            {Recipes.map((recipe) => (
            <div key={recipe.id}>
                <RecipeCard recipe = { recipe } />
            </div>
            ))}
        </div>
    );
};


export default RecipeDisplay;
