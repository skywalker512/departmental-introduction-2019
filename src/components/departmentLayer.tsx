import React, { Fragment } from 'react'
import styles from './departmentLayer.less'
import useProcess from '@/utilites/useProcess'

const DepartmentLayer: React.FC = ({ children }) => {
  const isProcessed = useProcess()

  return (
    <Fragment>
      <div className={styles.backgroundDyeing}/>
      <div className={styles.backgroundGrid} style={{ clipPath: isProcessed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }} />
      <div className={styles.backgroundOrigin} style={{ clipPath: isProcessed ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)' }} />
      <div className={styles.children}>{children}</div>
    </Fragment>
  )
}

export default DepartmentLayer
