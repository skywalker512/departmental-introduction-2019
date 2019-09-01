import React, { Fragment } from 'react'
import styles from './departmentButton.less'

const DepartmentButton: React.FC = ({children}) => {
  return (
    <Fragment>
      <div className={styles.wapper}>
        { children }
      </div>
    </Fragment>
  )
}

export default DepartmentButton
