import React from 'react'
import styles from './process.less'
import useProcess from '@/utilites/useProcess'
import { router } from 'umi'

const ProcessPage: React.FC = () => {
  const isProcess = useProcess(250)
  if (isProcess) {
    router.replace({
      pathname: '/gate'
    })
  }
  return <div className={styles.video}/>
}

export default ProcessPage;
