import React from 'react'
import RecipeCard from './RecipeCard'
import {RECIPE_LIST} from './RecipeCard/recipe-data'
import './RecipeCard/styles/global.css'

function App() {
  return (
    <div>
      {RECIPE_LIST.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
  )
}

export default App
