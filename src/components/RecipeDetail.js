import React, { useState, useEffect } from 'react';
import './recipeDetail.css'; 

const RecipeDetail = ({ recipe, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    cuisineType: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        cuisineType: recipe.cuisineType,
        ingredients: recipe.ingredients.join(', '), // Join for easier editing
        instructions: recipe.instructions,
        cookingTime: recipe.cookingTime,
      });
    }
  }, [recipe]);

  if (!recipe) return <div>Select a recipe to view details.</div>;

  const handleSave = () => {
    const ingredientsArray = formData.ingredients.split(',').map(item => item.trim());
    onEdit({ ...formData, ingredients: ingredientsArray }); // Update with array format
    setIsEditing(false); // Exit editing mode
    alert('Recipe successfully saved!'); // Show alert on successful edit
  };

  const handleDelete = () => {
    onDelete(recipe.id);
    alert('Recipe successfully deleted!'); // Show alert on successful delete
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="recipe-detail-container">
      <div className="recipe-box">
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Recipe Title"
              style={{width:"35%"}}
            /><br/><br/>
            <input
              type="text"
              name="cuisineType"
              value={formData.cuisineType}
              onChange={handleChange}
              placeholder="Cuisine Type"
              style={{width:"35%"}}
            /><br/><br/>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Enter ingredients, separated by commas"
              style={{width:"35%"}}
            /><br/><br/>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Cooking Instructions"
              style={{width:"35%"}}
            /><br/><br/>
            <input
              type="number"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              placeholder="Cooking Time in Minutes"
              style={{width:"35%"}}
            /><br/><br/>
            <button onClick={handleSave} style={{ marginRight:"10px",padding:"5px 20px" }}>Save</button>
            <button onClick={() => setIsEditing(false)} style={{ padding:"5px 20px" }}>Cancel</button>
          </>
        ) : (
          <>
            <h2>{recipe.title}</h2>
            <p><strong>Cuisine Type:</strong> {recipe.cuisineType}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
            <button onClick={() => setIsEditing(true)} style={{ marginRight:"10px",padding:"5px 20px" }}>Edit</button> 
            <button onClick={handleDelete} style={{ padding:"5px 20px" }}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
