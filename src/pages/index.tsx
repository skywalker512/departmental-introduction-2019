import React, { useState } from 'react'
import styles from './index.less'
import router from 'umi/router'

const IndexPage: React.FC = () => {
  const [isOk, setOk] = useState(false)
  window.addEventListener('orient', () => {
    setOk(true)
  })

  const handelEnterClick = () => {
    router.push({
      pathname: '/home'
    })
  }
  return (
    <div>
      <div className={styles.backGround} style={{ transform: isOk ? 'scale(1.5)': 'scale(1)' }}/>
      <div className={styles.text} style={{ opacity: isOk ? 1: 0 }} onClick={handelEnterClick}> 进入主页 </div>
    </div>
  )
}

export default IndexPage
