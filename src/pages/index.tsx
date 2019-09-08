import React, { useState, Fragment, useEffect } from 'react'
import styles from './index.less'
import router from 'umi/router'
import spaceshipPng from '@/assets/img/spaceship.png'
import useWord from '@/utilites/useWord'
import useProcess from '@/utilites/useProcess'

const Gate: React.FC = () => {
  const isProcess = useProcess(500)
  const isProcessText = useProcess(5000)
  const handelEnterClick = () => {
    if (isProcessText) {
      router.replace({
        pathname: '/home',
      })
    }
  }
  return (
    <div
      className={styles.wapper}
      style={{
        clipPath: isProcess ? 'circle(100%)' : 'circle(0%)',
        WebkitClipPath: isProcess ? 'circle(100%)' : 'circle(0%)',
      }}
    >
      <div className={styles.backGround} style={{ backgroundSize: isProcess ? '170%' : '100%' }} />
      <div className={styles.text} style={{ opacity: isProcessText ? 1 : 0 }}>
        推开这扇大门
        <br />
        我们将带领你解析我们的多元构成
      </div>
      <div
        className="spinner"
        onClick={handelEnterClick}
        style={{ opacity: isProcessText ? 1 : 0 }}
      >
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  )
}

const Content: React.FC = () => {
  const words = [
    '欢迎来到红岩网校空间站',
    '我是Redrocker.AI',
    '1942年2月14日 世界上第一台电子计算机在美国宾夕法大学问世',
    '2019年9月 加入我们 探索信息时代的星辰大海',
  ]
  const pTexts = [
    useWord(words[0], 0.02, 100),
    useWord(words[1], 0.02, 1000),
    useWord(words[2], 0.02, 2000),
    useWord(words[3], 0.02, 4000),
  ]

  const Word: React.FC<{ text: string; pText: string }> = ({ text, pText }) => {
    return (
      <Fragment>
        <p style={{ display: pText.length < text.length ? '' : 'none' }}>{pText}</p>
        <p style={{ display: pText.length < text.length ? 'none' : '' }}>{text}</p>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <div className={styles.spaceship}>
        <img src={spaceshipPng} alt="spaceship" />
      </div>
      <div className={styles.word}>
        {words.map((word, index) => (
          <Word text={word} pText={pTexts[index]} key={index} />
        ))}
      </div>
    </Fragment>
  )
}

const ContentT: React.FC = () => {
  const isShowGate = useProcess(7500)
  const isHideText = useProcess(10000)
  return (
    <Fragment>
      {isShowGate ? <Gate /> : ''}
      {!isHideText ? <div className={styles.background}><Content /></div> : ''}
    </Fragment>
  )
}

const IndexPage: React.FC = () => {
  const [isOk, setOk] = useState(false)
  window.addEventListener('orient', () => {
    setOk(true)
  })
  return (
    <Fragment>
      {isOk ? <ContentT /> : ''}
    </Fragment>
  )
}

export default IndexPage
