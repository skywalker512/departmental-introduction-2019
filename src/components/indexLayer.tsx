import React from 'react'
import styles from './indexLayer.less'
const IndexLayer: React.FC = ({ children }) => {
  return (
    <div className={styles.wapper}>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

export default IndexLayer
