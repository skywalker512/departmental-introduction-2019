import React, { Fragment } from 'react'
import styles from './departmentLayer.less'

const DepartmentLayer: React.FC = ({ children }) => {
  return (
    <Fragment>
      <div className={styles.backgroundDyeing}></div>
      <div className={styles.backgroundGrid}></div>
      <div className={styles.children}>{children}</div>
    </Fragment>
  )
}

export default DepartmentLayer
