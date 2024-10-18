import React from 'react';
import './styles.css'; // Ensure you have styles for the grid


const RecipeList = ({ recipes, onRecipeSelect }) => {

    const handleClick = (recipe) => {
        alert('Scroll Down to Show Details');
        onRecipeSelect(recipe); // Call the onRecipeSelect function after the alert
      };
      
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id} onClick={() => handleClick(recipe)}>
          <h3>{recipe.title}</h3>
          <p><strong>Cuisine:</strong> {recipe.cuisineType}</p>
          <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
