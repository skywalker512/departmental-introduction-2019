import React, { Fragment } from 'react'
import styles from './Vback.less'

const VBack: React.FC = () => {
  return (
    <Fragment>
      <div className={styles.content}>
        <span>返回</span>
      </div>
      <div className={styles.divider}>
        <div/>
      </div>
      <div className={styles.divider}>
        <div/>
      </div>
    </Fragment>
  )
}

export default VBack
