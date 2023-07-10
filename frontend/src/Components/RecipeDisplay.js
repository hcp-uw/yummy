import React from "react";
import Recipes from "../data/TestRecipes.json"
import { useEffect, useState } from "react"

function RecipeDisplay() {
    return (
        <div>
            <h1>Recipes</h1>
            {Recipes.map((recipe) => (
            <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <p>Preparation Time: {recipe.prep_time}</p>
                <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
                </ul>
                <p>{recipe.link}</p>
            </div>
            ))}
        </div>
    );
}




export default RecipeDisplay;

// const RecipeDisplay = () => {
//     const [recipes, setRecipes] = useState([]);
  
//     useEffect(() => {
//       fetchRecipes();
//     }, []);
  
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch("/frontend/src/TestRecipes.json");
//         const data = await response.json();
//         setRecipes(data.recipes);
//       } catch (error) {
//         console.log(error);   
//       }
//     };
//   };