import React from 'react'
import styles from './gateLayer.less'
const GateLayer: React.FC = ({ children }) => {
  return (
    <div className={styles.wapper}>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

export default GateLayer
