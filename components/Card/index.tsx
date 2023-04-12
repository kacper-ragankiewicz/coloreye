import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Card.module.sass'

import arrow from '../../styles/assets/angle-down.png'
import Image from 'next/image'

type types = {
  item: any
  key: string
  state: boolean
}

export const Card = (props: any) => {

  const [onBottom, setOnBottom] = useState(false);

  const listArrey = [
    'GRAPHIC Designer',
    'Problem Solver',
    'Strategic thinker',
    'Team player',
    'GRAPHIC Designer',
    'Problem Solver',
    'Strategic thinker',
    'Team player',
    'GRAPHIC Designer',
    'Problem Solver',
    'Strategic thinker',
    'Team player'
  ]

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const ScrollToBottom = () => {
    setOnBottom(!onBottom)

    if(!onBottom) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      window.scrollTo(0,0);
    }
  }

  const ChangeColor = (state: boolean) => {
    const body = document.querySelector('body');
    props.onClick()
    
    if(body) {
      if (!state) {
        return body.style.backgroundColor = `#ff6f00`;
      }
      return body.style.backgroundColor = `#10A19D`;
    }
    return
  }
  useEffect(() => {
      const eye = document.querySelector('#eyeball') as HTMLInputElement;
      const eyepoint = document.querySelector('#eyepoint')as HTMLInputElement;
      window.addEventListener('mousemove', (evt) => {
        const x = -(window.innerWidth / 2 - evt.pageX) / 3.5;
        const y = -(window.innerHeight / 2 - evt.pageY) / 60;
        const xp = -(window.innerWidth / 2 - evt.pageX) / 33.5;
        const yp = -(window.innerHeight / 2 - evt.pageY) / 100;
        if (eye && eyepoint) {
          eye.style.transform = `translateY(${y > 140 ? 140 : y < -140 ? -140 : y}px) translateX(${x > 140 ? 140 : x < -140 ? -140 : x}px)`;
          eyepoint.style.transform = `translateY(${yp}px) translateX(${xp}px)`;
        }
      });


      setInterval(() => {
        const x = getRandomInt(-30, 30)
        const y = getRandomInt(-30,30)
        const z = getRandomInt(3,4)
        const eye = document.querySelector('#eyeball') as HTMLInputElement;
        const eyepoint = document.querySelector('#eyepoint')as HTMLInputElement;
        eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
        eyepoint.style.transform = `translateY(${y/2}px) translateX(${x/2}px)`;
        eyepoint.style.transform = `scale(${z/4})`;
      }, 2500);

    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop > 150) {
          setOnBottom(true)
      } else {
          setOnBottom(false)
      }
    });
  },[])
  

  const ListObjects = (props : types) => {
    
    
    return(
      <li className={cn(styles.listElement, { [styles.changeColor]: props.state})}>{props.item}</li>
      )
    }
    
    
    const listGenerator = listArrey.map(item => <ListObjects key={item} item={item} state={props.state}/>)

  return (
    <div className={cn(styles.container, { [styles.changeColor]: props.state})}>
      <div className={styles.animations}>
        <div className={styles.firstRow}>
          <h1 className={cn(styles.headerKac, { [styles.changeColor]: props.state})}>KAC</h1>
          <span id='eyebox' onClick={() => ChangeColor(props.state)} className={cn(styles.eyeBox, { [styles.changeColor]: props.state})}>
            <span id='eyebraw' className={cn(styles.eyeBraw, { [styles.changeColor]: props.state})}/>
            <span id='eyeball' className={cn(styles.eyeBall, { [styles.changeColor]: props.state})}>
              <span id='eyepoint' className={cn(styles.eyePoint, { [styles.changeColor]: props.state})}></span>
            </span>
          </span>
          <h1 className={cn(styles.headerPer, { [styles.changeColor]: props.state})}>PER</h1>
        </div>
        <div className={cn(styles.slider, { [styles.changeColor]: props.state})}>
          <ul className={styles.list}>
            {listGenerator}
          </ul>
        </div>
        <h1 className={cn(styles.headerLastName, { [styles.changeColor]: props.state})}>RAGANKIEWICZ</h1>
        <span className={cn(styles.arrow, { [styles.onBottom]: onBottom})} onClick={() => ScrollToBottom()}>
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
