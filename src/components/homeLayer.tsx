import React from 'react'
import styles from './homeLayer.less'
const HomeLayer: React.FC = ({ children }) => {
  return (
    <div className={styles.wapper}>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

export default HomeLayer
