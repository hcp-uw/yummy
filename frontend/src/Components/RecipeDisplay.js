import React from "react";
import Recipes from "../data/TestRecipes.json"
import RecipeCard from "./RecipeCard";
import './Components.css'


function RecipeDisplay() {

    return (
        <div>
            <h1 className="Recipes-title">Recipes Area</h1>
            {Recipes.map((recipe) => (
            <div key={recipe.id}>
                <RecipeCard recipe = { recipe } />
            </div>
            ))}
        </div>
    );
};


export default RecipeDisplay;
