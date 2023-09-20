import React from 'react'

export default function RecipeInfo(props){
    const{title,descrip} = props
    return(
        <div className="recipeinfo"> 
            <h1 className="title">{title}</h1>
            <p> {descrip} </p>
        </div>
    )
}