import React from 'react'
import styles from './dapartmentDetail.less'

const DepartmentDetail: React.FC = ({ children }) => {
  return (
    <div className={styles.wapper}>
      <p>{children}</p>
    </div>
  )
}

export default DepartmentDetail
