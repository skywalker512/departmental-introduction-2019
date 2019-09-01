import React, { Fragment } from 'react'
import styles from './Vback.less'
import useAnimation from '@/utilites/useAnimation'

const VBack: React.FC = () => {
  return (
    <Fragment>
      <div className={styles.content}>
        <span>返回</span>
      </div>
      <div className={styles.divider}>
        <div></div>
      </div>
      <div className={styles.divider}>
        <div></div>
      </div>
    </Fragment>
  )
}

export default VBack
