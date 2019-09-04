import React from 'react'
import styles from './gate.less'
import router from 'umi/router'
import useProcess from '@/utilites/useProcess'

const IndexPage: React.FC = () => {
  const isProcess = useProcess()
  const handelEnterClick = () => {
    router.push({
      pathname: '/home'
    })
  }
  return (
    <div>
      <div className={styles.backGround} style={{ transform: isProcess ? 'scale(1.5)': 'scale(1)' }}/>
      <div className={styles.text} style={{ opacity: isProcess ? 1: 0 }} onClick={handelEnterClick}> 进入主页 </div>
    </div>
  )
}

export default IndexPage
