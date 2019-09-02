import React, { Fragment } from 'react'
import styles from './departmentTitle.less'

const DepartmentTitle: React.FC = ({ children }) => {
  return (
    <div className={styles.wapper}>
      <span>{children}</span>
    </div>
  )
}

export default DepartmentTitle
