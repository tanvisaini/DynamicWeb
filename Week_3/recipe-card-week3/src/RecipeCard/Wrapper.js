import React from 'react'
import styles from './RecipeCard.module.css'

export default function Wrapper() {
  return (
    <div className={styles.wrapper}>
        <p> Thanks for visiting our site! </p>
        <p> <a href="../App.js"> Back to Top </a> </p>
        <p> Want to contribute? Visit <a href="https://github.com/tanvisaini/DynamicWebCookBook"> our Github Database! </a> </p>
    </div>
  );
}