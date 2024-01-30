import React from 'react'
import styles from "./card.module.css"
const Card = ({title,description,src}) => {
  return (
    <div className={styles.card}>
    <img
      className={styles.cardImage}
      src={src}
      alt={"something"}
    />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </div>
  )
}

export default Card
