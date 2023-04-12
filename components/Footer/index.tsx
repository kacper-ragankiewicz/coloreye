import React from 'react'
import styles from './Footer.module.sass'
import cn from 'classnames'

export const Footer = (props: any) => {
  return (
    <div className={cn(styles.container, { [styles.changeColor]: props.state})}>
        © Kacper Ragankiewicz 2023
    </div>
  )
}
