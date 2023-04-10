import React, { useState } from 'react'
import styles from './Options.module.sass'
import cn from 'classnames'
import Image from 'next/image';
import { Link } from '../Link';

import open from '../../styles/assets/exit.png'
import chiptree from './../../styles/assets/chiptree.png'
import itcntr from './../../styles/assets/itcntr.png'

interface states {
  activeIndex: number;
}

export const Options = () => {
  const [active, setActive] = useState<states>({ activeIndex: 0})

  const projectsArrey = [
    {
      name: 'ChipTree',
      desc: 'Interface for IOT',
      link: 'https://chiptree.pl',
      tech: ['Next', 'Node', 'PostgreSQL', 'Firebase'],
      img: 'https://live.staticflickr.com/65535/52807396473_5b4889ae66_b.jpg',
      url: 'https://chiptree.pl'
    },
    {
      name: 'itCNTR',
      desc: 'Web Search for IT offerts',
      link: 'https://chiptree.pl',
      tech: ['Next', 'Node', 'PostgreSQL', 'Firebase'],
      img: 'https://live.staticflickr.com/65535/52806945886_599d716bee_b.jpg',
      url: 'https://itcntr.com'
    },
    {
      name: 'AlgoCode',
      desc: 'Find the shortest path on PC',
      link: 'https://chiptree.pl',
      tech: ['Next', 'Node', 'PostgreSQL', 'Firebase'],
      img: 'https://live.staticflickr.com/65535/52806391412_25298e8921_b.jpg',
      url: 'https://algocode.vercel.app/'
    },
    {
      name: 'Amazingkidsacademy',
      desc: 'Website for enterteiment company',
      link: 'https://chiptree.pl',
      tech: ['Next', 'Node', 'PostgreSQL', 'Firebase']
    },
    {
      name: 'Amazingkidsacademy',
      desc: 'Website for enterteiment company',
      link: 'https://chiptree.pl',
      tech: ['Next', 'Node', 'PostgreSQL', 'Firebase']
    },
  ]

  const ProjectGenerator = (props: any) => {

    const techList = props.tech.map((item: any) => <li key={item}>{item}</li>)


    return(
      
      <li key={props.key} className={styles.itemContainer}>
        <Link href={props.url ? props.url : '#'}>
          <div className={styles.headerContainer}>
            <h2 className={styles.itemHeader}>{props.name}</h2>
            <p className={styles.itemDescription}>{props.desc}</p>
            <ul className={styles.techList}>
              {techList}
            </ul>
          </div>
            <div className={styles.projectImage}>
              <Image
                src={props.img}
                width={300}
                height={700}
                alt='Project IMG'
                priority
              />
            </div>
          {/* <div className={styles.openButtonContainer}>
            <button className={styles.openButton}>
              <Image
                src={open}
                width={40}
                height={40}
                alt='Open IMG'
                className={styles.openImg}
                priority
              />
            </button>
          </div> */}
        </Link>
      </li>
    )
  }
  const projectsList = projectsArrey.map(item => <ProjectGenerator key={item} {...item} />)

  return (
    <div className={styles.container}>
        <div className={styles.list}>
            <div className={cn(styles.listELement, { [styles.active]: active.activeIndex === 1})} onClick={() => setActive({ activeIndex: 1})}>
              <h4 className={styles.listHeader}>About</h4>
            </div>
            <div className={styles.activeBox}>
              { active.activeIndex === 1 &&
                <div>Hello</div>
              }
            </div>
            <div className={cn(styles.listELement, { [styles.active]: active.activeIndex === 2})} onClick={() => setActive({ activeIndex: 2})}>
              <h4 className={styles.listHeader}>Portfolio</h4>
            </div>
            <div className={styles.activeBox}>
              { active.activeIndex === 2 &&
                <ul className={styles.containerProjects}>
                  {projectsList}
                </ul>
              }
            </div>
            <div className={cn(styles.listELement, { [styles.active]: active.activeIndex === 3})} onClick={() => setActive({ activeIndex: 3})}>
              <h4 className={styles.listHeader}>Contact</h4>
            </div>
            <div className={styles.activeBox}>
              { active.activeIndex === 3 &&
                <div>Hello</div>
              }
            </div>
        </div>
    </div>
  )
}
