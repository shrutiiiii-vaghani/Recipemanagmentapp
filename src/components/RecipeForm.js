import React, { useState, useEffect } from 'react';

const RecipeForm = ({ selectedRecipe, onSave }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cuisineType: '',
    cookingTime: ''
  });

  useEffect(() => {
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    }
  }, [selectedRecipe]);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(recipe);
    setRecipe({
      title: '',
      ingredients: '',
      instructions: '',
      cuisineType: '',
      cookingTime: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="title" 
        placeholder="Title" 
        value={recipe.title} 
        onChange={handleChange} 
      /><br/><br/>
      <input 
        name="cuisineType" 
        placeholder="Cuisine Type" 
        value={recipe.cuisineType} 
        onChange={handleChange} 
      /><br/><br/>
      <textarea 
        name="ingredients" 
        placeholder="Ingredients (comma separated)" 
        value={recipe.ingredients} 
        onChange={handleChange} 
      /><br/><br/>
      <textarea 
        name="instructions" 
        placeholder="Instructions" 
        value={recipe.instructions} 
        onChange={handleChange} 
      /><br/><br/>
      <input 
        name="cookingTime" 
        placeholder="Cooking Time" 
        value={recipe.cookingTime} 
        onChange={handleChange} 
      /><br/><br/>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;
