import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Card.module.sass'

import arrow from '../../styles/assets/angle-down.png'
import Image from 'next/image'

type types = {
  item: any
  key: string
}

export const Card = () => {

  const [eyeBlink, setEyeBlink] = useState(true);

  const listArrey = [
    'GRAPHIC Designer',
    'Problem Solver',
    'Strategic thinker',
    'Team player'
  ]

  useEffect(() => {
    setEyeBlink(false)
    if(eyeBlink) {
      const eye = document.querySelector('#eyeball') as HTMLInputElement;
      const eyepoint = document.querySelector('#eyepoint')as HTMLInputElement;
      window.addEventListener('mousemove', (evt) => {
        const x = -(window.innerWidth / 2 - evt.pageX) / 3.5;
        const y = -(window.innerHeight / 2 - evt.pageY) / 80;
        const xp = -(window.innerWidth / 2 - evt.pageX) / 33.5;
        const yp = -(window.innerHeight / 2 - evt.pageY) / 100;
        if (eye && eyepoint) {
          eye.style.transform = `translateY(${y > 140 ? 140 : y < -140 ? -140 : y}px) translateX(${x > 140 ? 140 : x < -140 ? -140 : x}px)`;
          eyepoint.style.transform = `translateY(${yp}px) translateX(${xp}px)`;
        }
      });
    }

  },[eyeBlink])


  const ListObjects = (props : types) => {


    return(
      <li className={styles.listElement}>{props.item}</li>
    )
  }


  const listGenerator = listArrey.map(item => <ListObjects key={item} item={item}/>)

  return (
    <div className={styles.container}>
      <div className={styles.animations}>
        <div className={styles.firstRow}>
          <h1 className={styles.header}>KAC</h1>
          <span id='eyebox' onClick={() => setEyeBlink(!eyeBlink)} className={cn(styles.eyeBox, { [styles.eyeBlink]: eyeBlink})}>
            <span id='eyebraw' className={cn(styles.eyeBraw, { [styles.eyeBlink]: eyeBlink})}/>
            <span id='eyeball' className={styles.eyeBall}>
              <span id='eyepoint' className={styles.eyePoint}></span>
            </span>
          </span>
          <h1 className={styles.header}>PER</h1>
        </div>
        <div className={styles.slider}>
          <ul className={styles.list}>
            {listGenerator}
          </ul>
          <ul className={cn(styles.list, styles.listTwo)}>
            {listGenerator}
          </ul>
        </div>
        <h1 className={styles.headerLastName}>RAGANKIEWICZ</h1>
        <span className={styles.arrow}>
          <Image
            src={arrow}
            width={59}
            height={59}
            alt='Arrow IMG'
            className={styles.arrowImg}
          />
        </span>
      </div>
    </div>
  )
}
