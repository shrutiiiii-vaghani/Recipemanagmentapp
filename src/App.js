import React, { useState } from 'react';
import RecipeDetail from './components/RecipeDetail.js'; 
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm.js';

const initialRecipes = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    cuisineType: 'Italian',
    ingredients: ['spaghetti', 'ground beef', 'tomato sauce'],
    instructions: 'Cook spaghetti, prepare sauce, mix together.',
    cookingTime: 30,
  },
  {
    id: 2,
    title: 'Chicken Curry',
    cuisineType: 'Indian',
    ingredients: ['chicken', 'curry powder', 'coconut milk'],
    instructions: 'Cook chicken, add spices, simmer.',
    cookingTime: 40,
  },
  {
    id: 3,
    title: 'Beef Tacos',
    cuisineType: 'Mexican',
    ingredients: ['ground beef', 'taco shells', 'lettuce', 'tomato', 'cheese'],
    instructions: 'Cook beef, fill shells, and top with toppings.',
    cookingTime: 20,
  },
  {
    id: 4,
    title: 'Vegetable Stir Fry',
    cuisineType: 'Chinese',
    ingredients: ['mixed vegetables', 'soy sauce', 'ginger', 'garlic'],
    instructions: 'Stir-fry vegetables with sauce and spices.',
    cookingTime: 15,
  },
  {
    id: 5,
    title: 'Margarita Pizza',
    cuisineType: 'Italian',
    ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'basil'],
    instructions: 'Assemble pizza and bake until golden.',
    cookingTime: 25,
  },
  {
    id: 6,
    title: 'Shrimp Fried Rice',
    cuisineType: 'Asian',
    ingredients: ['shrimp', 'rice', 'peas', 'carrots', 'soy sauce'],
    instructions: 'Fry rice with shrimp and vegetables.',
    cookingTime: 20,
  },
  {
    id: 7,
    title: 'Greek Salad',
    cuisineType: 'Greek',
    ingredients: ['cucumber', 'tomato', 'feta cheese', 'olive oil', 'oregano'],
    instructions: 'Combine ingredients and drizzle with olive oil.',
    cookingTime: 10,
  },
  {
    id: 8,
    title: 'Pancakes',
    cuisineType: 'American',
    ingredients: ['flour', 'milk', 'egg', 'sugar', 'baking powder'],
    instructions: 'Mix ingredients and cook on a skillet.',
    cookingTime: 15,
  },
  {
    id: 9,
    title: 'Chili Con Carne',
    cuisineType: 'Mexican',
    ingredients: ['ground beef', 'kidney beans', 'chili powder', 'tomatoes'],
    instructions: 'Cook beef, add beans and spices, simmer.',
    cookingTime: 45,
  },
  {
    id: 10,
    title: 'Egg Fried Rice',
    cuisineType: 'Chinese',
    ingredients: ['rice', 'egg', 'peas', 'carrots', 'soy sauce'],
    instructions: 'Fry rice with egg and vegetables.',
    cookingTime: 15,
  },
  {
    id: 11,
    title: 'Lentil Soup',
    cuisineType: 'Mediterranean',
    ingredients: ['lentils', 'carrot', 'celery', 'onion', 'vegetable broth'],
    instructions: 'Simmer all ingredients until lentils are tender.',
    cookingTime: 30,
  },
  {
    id: 12,
    title: 'Caesar Salad',
    cuisineType: 'Italian',
    ingredients: ['romaine lettuce', 'croutons', 'Caesar dressing', 'parmesan'],
    instructions: 'Toss ingredients together and serve.',
    cookingTime: 10,
  },
  {
    id: 13,
    title: 'Grilled Cheese Sandwich',
    cuisineType: 'American',
    ingredients: ['bread', 'cheese', 'butter'],
    instructions: 'Butter bread, add cheese, and grill until golden.',
    cookingTime: 10,
  },
  {
    id: 14,
    title: 'Tom Yum Soup',
    cuisineType: 'Thai',
    ingredients: ['shrimp', 'mushrooms', 'lemongrass', 'lime', 'chili'],
    instructions: 'Simmer ingredients in broth and serve hot.',
    cookingTime: 25,
  },
  {
    id: 15,
    title: 'Quiche Lorraine',
    cuisineType: 'French',
    ingredients: ['pie crust', 'eggs', 'cream', 'bacon', 'cheese'],
    instructions: 'Mix ingredients, pour into crust, and bake.',
    cookingTime: 40,
  },
  {
    id: 16,
    title: 'Pesto Pasta',
    cuisineType: 'Italian',
    ingredients: ['pasta', 'pesto sauce', 'parmesan cheese'],
    instructions: 'Cook pasta, mix with pesto, and serve.',
    cookingTime: 20,
  },
  {
    id: 17,
    title: 'Chocolate Chip Cookies',
    cuisineType: 'American',
    ingredients: ['flour', 'sugar', 'butter', 'chocolate chips', 'egg'],
    instructions: 'Mix ingredients, scoop onto tray, and bake.',
    cookingTime: 15,
  },
  {
    id: 18,
    title: 'Baked Salmon',
    cuisineType: 'Seafood',
    ingredients: ['salmon fillet', 'lemon', 'dill', 'olive oil'],
    instructions: 'Season salmon, bake until cooked through.',
    cookingTime: 25,
  },
  {
    id: 19,
    title: 'Falafel Wrap',
    cuisineType: 'Middle Eastern',
    ingredients: ['falafel', 'pita bread', 'lettuce', 'tomato', 'tahini'],
    instructions: 'Wrap falafel and vegetables in pita bread.',
    cookingTime: 15,
  },
  {
    id: 20,
    title: 'Beef Stroganoff',
    cuisineType: 'Russian',
    ingredients: ['beef', 'mushrooms', 'onion', 'sour cream', 'pasta'],
    instructions: 'Cook beef, add mushrooms and sour cream, serve over pasta.',
    cookingTime: 35,
  },
];


const App = () => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (updatedRecipe) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
    setSelectedRecipe(updatedRecipe);
  };

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
    setSelectedRecipe(null);
  };

  

    
  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

 

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign:"center"}}>Recipe App</h1>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search Recipes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontSize: "medium", padding: "10px", width: "300px" }}
        />
      </div>
      <RecipeList recipes={filteredRecipes}  onRecipeSelect={selectRecipe} /> {/* Use RecipeList here */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;