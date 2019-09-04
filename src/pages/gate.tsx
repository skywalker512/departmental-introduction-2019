import React from 'react'
import styles from './gate.less'
import router from 'umi/router'
import useProcess from '@/utilites/useProcess'

const IndexPage: React.FC = () => {
  const isProcess = useProcess()
  const isProcessText = useProcess(2000)
  const handelEnterClick = () => {
    if (isProcessText) {
      router.push({
        pathname: '/home'
      })
    }
  }
  return (
    <div>
      <div className={styles.backGround} style={{ transform: isProcess ? 'scale(1.5)': 'scale(1)' }} onClick={handelEnterClick}/>
      <div className={styles.text} style={{ opacity: isProcess ? 1: 0 }}>
        推开这扇大门<br/>
        我们将带领你解析我们的多元构成
        <div style={{ opacity: isProcessText ? 1: 0 }}>
          点击任何地方以进入
        </div>
      </div>

    </div>
  )
}

export default IndexPage
