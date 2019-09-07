import React, { useEffect } from 'react'
import styles from './joinin.less'
import JoinInPng from '@/assets/img/joinin.png'

const JoinInPage: React.FC = () => {
  const event = new Event('exitFullscreen1');
  const handelClick = () => {
    window.dispatchEvent(event)
  }

  useEffect(()=>{
    handelClick()
  }, [])

  return (
    <div>
      <img src={JoinInPng} alt='JoinInPng' className={styles.joinInPng}/>
    </div>
  )
}

export default JoinInPage
