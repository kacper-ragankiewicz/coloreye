import React, { useEffect, useState } from 'react'
import styles from './Options.module.sass'
import cn from 'classnames'
import Image from 'next/image';
import { Link } from '../Link';
import OutsideAlerter from '../Outside';

import copy from '../../styles/assets/copy.png'
import twitter from '../../styles/assets/twitter.png'
import facebook from '../../styles/assets/facebook.png'
import linkedin from '../../styles/assets/linkedin.png'

interface states {
  activeIndex: number;
}

export const Options = () => {
  const [active, setActive] = useState<states>({ activeIndex: 0})
  const [saved, setSaved] = useState(false)

  const projectsArrey = [
    {
      name: 'ChipTree',
      desc: 'Interface for IOT',
      tech: ['Next', 'Node', 'PostgreSQL', 'Firebase'],
      img: 'https://live.staticflickr.com/65535/52807396473_5b4889ae66_b.jpg',
      url: 'https://chiptree.pl'
    },
    {
      name: 'CT Store',
      desc: 'One page shop',
      tech: ['Next', 'Stripe', 'Sanity'],
      img: 'https://live.staticflickr.com/65535/52808811412_9240128900_b.jpg',
      url: 'https://store.chiptree.pl'
    },
    {
      name: 'itCNTR',
      desc: 'Web Search for IT offerts',
      tech: ['React', 'Figma', 'SASS'],
      img: 'https://live.staticflickr.com/65535/52806945886_599d716bee_b.jpg',
      url: 'https://itcntr.com'
    },
    {
      name: 'AlgoCode',
      desc: 'Find the shortest path on PC',
      tech: ['React'],
      img: 'https://live.staticflickr.com/65535/52806391412_25298e8921_b.jpg',
      url: 'https://algocode.vercel.app/'
    },
    {
      name: 'BudoMEX',
      desc: 'Figma project for app',
      tech: ['Figma'],
      img: 'https://live.staticflickr.com/65535/52807932883_1ac8818d6e_b.jpg',
      url: 'https://www.figma.com/file/4NKM599rUmcYLC3wxXiBRi/Budomex-(Copy)?t=7xOS1S5Ggpi0ga2R-6'
    },
    {
      name: 'Paero',
      desc: 'Figma project for app',
      tech: ['Figma'],
      img: 'https://live.staticflickr.com/65535/52806939632_4a923a1cf8_c.jpg',
      url: 'https://www.figma.com/file/wbdHyQ1KsKTes7XhxtBHE5/Paero-(Copy)?t=7xOS1S5Ggpi0ga2R-6'
    },
    {
      name: 'ComparePart',
      desc: 'Figma project for app',
      tech: ['Figma'],
      img: 'https://live.staticflickr.com/65535/52807947260_65f663ff2a_b.jpg',
      url: 'https://www.figma.com/file/TBbpnrYqUixFBt65ohNVx5/Findyourpart-(Copy)?t=7xOS1S5Ggpi0ga2R-6'
    },
  ]

  const ProjectGenerator = (props: any) => {

    const techList = props.tech.map((item: any) => <li key={item}>{item}</li>)

    
    
    return(
      
      <li key={props.key} className={styles.itemContainer} onDragStart={(event)=> event.preventDefault()}>
        <Link className={styles.link} href={props.url ? props.url : '#'}>
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
  const ScrollToBottom = (activeIndex: number) => {

    setActive({ activeIndex: activeIndex})

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);

  }

  const Copy = () => {
    setSaved(true)
    navigator.clipboard.writeText('kasper.ragan@gmail.com')
  }

  return (
    <div className={styles.container}>
      <OutsideAlerter
        state={active.activeIndex === 0 ? false : true}
        change={() => setActive({ activeIndex: 0})}
      >
        <div className={styles.list}>
            <div className={cn(styles.listELement, { [styles.active]: active.activeIndex === 1})} onClick={() => ScrollToBottom(1)}>
              <h4 className={styles.listHeader}>About</h4>
            </div>
            <div className={styles.activeBox}>
              { active.activeIndex === 1 &&
                <div className={styles.aboutContainer}>
                  <h3>Hi! My name is Kacper (as you know),</h3>
                  <p>
                    I am Software Developer, started as frontend dev. In programing, I valuable moust the effectiveness, not the code or style.
                  </p>

                </div>
              }
            </div>
            <div className={cn(styles.listELement, { [styles.active]: active.activeIndex === 2})} onClick={() => ScrollToBottom(2)}>
              <h4 className={styles.listHeader}>Portfolio</h4>
            </div>
            <div className={styles.activeBox}>
              { active.activeIndex === 2 &&
                <ul className={styles.containerProjects}>
                  {projectsList}
                </ul>
              }
            </div>
            <div className={cn(styles.listELement, { [styles.active]: active.activeIndex === 3})} onClick={() => ScrollToBottom(3)}>
              <h4 className={styles.listHeader}>Contact</h4>
            </div>
            <div className={styles.activeBox}>
              { active.activeIndex === 3 &&
                <div className={styles.contactContainer}>
                  <div className={styles.emailContainer}>
                    <h3 className={styles.emailHeader}>email:</h3>
                    <p className={styles.email}>kasper.ragan@gmail.com</p>
                    {/* <button className={styles.copyButton} onClick={() => {navigator.clipboard.writeText('asas')}}>
                      { saved ?
                          'Copied!'
                      :
                        <Image
                          src={copy}
                          width={20}
                          height={20}
                          alt='CopyIMG'
                          className={styles.copyImg}
                        />

                      }
                    </button> */}
                  </div>
                  <div className={styles.socialmediaContainer}>
                    <div className={styles.linkIcon}>
                      <Link href='https://www.facebook.com/kacper.ragankiewicz' className={styles.linkIcon}>
                        <Image
                          src={facebook}
                          width={30}
                          height={30}
                          alt='Facebook ICON'
                          />
                      </Link>
                    </div>
                    <div className={styles.linkIcon}>
                      <Link href='https://twitter.com/Kacper_Ragan' className={styles.linkIcon}>
                        <Image
                          src={twitter}
                          width={30}
                          height={30}
                          alt='Twitter ICON'
                          />
                      </Link>
                    </div>
                    <div className={styles.linkIcon}>
                      <Link href='https://pl.linkedin.com/in/kacper-ragankiewicz-459a16255'>
                        <Image
                          src={linkedin}
                          width={30}
                          height={30}
                          alt='LinkedIN ICON'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              }
            </div>
        </div>
      </OutsideAlerter>
    </div>
  )
}
