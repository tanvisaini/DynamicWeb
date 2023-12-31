import React from 'react'
import RecipeCard from './RecipeCard'
import Title from './RecipeCard/Title'
import Wrapper from './RecipeCard/Wrapper'
import {RECIPE_LIST} from './RecipeCard/recipe-data'

function App() {
  return (
    <div>
      <Title />

      {RECIPE_LIST.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}

      <Wrapper />
    </div>
  )
}

export default App
