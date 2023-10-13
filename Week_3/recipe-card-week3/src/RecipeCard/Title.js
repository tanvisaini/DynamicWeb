import React from 'react'
import styles from './RecipeCard.module.css'

export default function Title() {
  return (
    <div className={styles.header}>
        <h1 className={styles.title}> Dynamic Web Cookbook </h1>
        <img className={styles.titleimg} src={ require('../assets/cookbook.jpg') }/>
    </div>
  );
}