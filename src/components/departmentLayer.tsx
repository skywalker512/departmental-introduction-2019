import React, { Fragment, useEffect, useState } from 'react'
import styles from './departmentLayer.less'

const DepartmentLayer: React.FC = ({ children }) => {
  const [isProcessed, setProcess] = useState(false)
  const requestRef: any = React.useRef();

  useEffect(()=>{
    requestRef.current = setTimeout(()=>{
      setProcess(true)
    }, 0)
    return () => clearTimeout(requestRef.current)
  }, [])


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
