import React from 'react'
import {RECIPE} from './recipe-data'
import RecipeInfo from './RecipeInfo'
import './recipecard.css'

export default function RecipeCard(){
    // where we would compute stuff is more complicated component but right now we are just returning html 
    return (
        <Card>
            <RecipeImg img={RECIPE.imgSrc} />

            <Words>

                <RecipeInfo title={RECIPE.title} descrip={RECIPE.description}/>

                <IngredientsList ingredi={RECIPE.ingredients} />

                <InstructionsList instructions={RECIPE.instructions}/>

            </Words>
        </Card>
    )
}

function Card(props){
    return(
        <div className="card">{props.children}</div>
    )
}

function Words(props){
    return(
        <div className="words">{props.children}</div>
    )
}

function InstructionsList(props){
    const {instructions} = props 
    return(
        <div> 
                <h3> Instructions </h3>
                <ul> 
                    {instructions.map((i,index) =>
                    (<li key={index}>{i}</li>
                    ))}
                </ul>
            </div>
    )
}

function RecipeImg(props){
    const {img} = props
    return(
        <img src={img} className="pancake" />
    )
}

function IngredientsList(props){
    const {ingredi} = props
    return(
        <div className="ingredients">
            <h3> Ingredients</h3>
            <ul> 
                {ingredi.map((i,index) => (<li key={index}>{i}</li>))}
            </ul>
        </div>
    )
}