import React, { Fragment, useState } from 'react'
import styles from './departmentLayer.less'
import useProcess from '@/utilites/useProcess'

const DepartmentLayer: React.FC = ({ children }) => {
  const [isShow, setShow] = useState(false)
  const setTimeoutRef: any = React.useRef();

  React.useEffect(() => {
    setTimeoutRef.current = setTimeout(()=>{
      setShow(true)
    }, 700)
    return () => {
      clearTimeout(setTimeoutRef.current)
    };
  }, []);

  return (
    <Fragment>
      <div className={styles.backgroundDyeing}/>
      <div className={styles.backgroundGrid} style={{ clipPath: isShow ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }} />
      <div className={styles.backgroundOrigin} style={{ clipPath: isShow ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)' }} />
      { isShow ? <div className={styles.children}>{children}</div> : '' }
    </Fragment>
  )
}

export default DepartmentLayer
