import React from 'react'
import styles from './departmentSlider.less'
import { ISliderProps } from '@/interface/department'
import useProcess from '@/utilites/useProcess'

interface IProps {
  name: string
  mark: number
}

const Silder: React.FC<IProps> = ({ name, mark }) => {
  const isProcess = useProcess()
  return (
    <div className={styles.sider}>
      <span>{name}</span>
      <div className={styles.siderBackgroud}>
        <div className={styles.siderHighlight} style={{ width: !isProcess ? '0%' : `${mark}%` }}/>
        <div className={styles.siderBall} style={{ left: !isProcess ? '0%' : `${mark}%`}} />
      </div>
    </div>
  )
}

const DepartmentSlider: React.FC<ISliderProps> = ({ technology, logic, taste }) => {
  return (
    <div className={styles.wapper}>
      <Silder name="技术" mark={technology} />
      <Silder name="思维" mark={logic} />
      <Silder name="审美" mark={taste} />
    </div>
  )
}

export default DepartmentSlider
