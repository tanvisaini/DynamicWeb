import React from 'react'
import styles from './RecipeCard.module.css'

export default function Card(props) {
  return <div className="card">{props.children}</div>
}
