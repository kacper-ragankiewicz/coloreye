import React, { useState } from 'react'
import styles from './Options.module.sass'

interface states {
  activeIndex: number;
}

export const Options = () => {
  const [active, setActive] = useState<states>({ activeIndex: 0})

  const projectsArrey = [
    {
      name: 'chiptree',
      desc: 'Interface for IOT',
      link: 'https://chiptree.pl',
    },
  ]

  const ProjectGenerator = (props: any) => {


    return(
      <li key={props.key} className={styles.itemContainer}>
        <h2 className={styles.itemHeader}>{props.name}</h2>
      </li>
    )
  }
  const projectsList = projectsArrey.map(item => <ProjectGenerator key={item} name={item.name} link={item.link} desc={item.desc}/>)

  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li onClick={() => setActive({ activeIndex: 1})}>
              About
            { active.activeIndex === 1 &&
              <div>Hello</div>
            }
            </li>
            <li onClick={() => setActive({ activeIndex: 2})}>
              Portfolio
              { active.activeIndex === 2 &&
                <ul className={styles.containerProjects}>
                  {/* {projectsList} */}
                </ul>
              }
            </li>
            <li onClick={() => setActive({ activeIndex: 3})}>
              Contact
              { active.activeIndex === 3 &&
                <div>Hello</div>
              }
            </li>
        </ul>
    </div>
  )
}
