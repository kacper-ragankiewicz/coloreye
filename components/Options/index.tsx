import React from 'react'
import styles from './Options.module.sass'

export const Options = () => {
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
