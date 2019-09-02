import React from 'react'
import styles from './departmentSlider.less'
import { ISliderProps } from '@/interface/department'
import {useSpring, animated} from 'react-spring'

interface IProps {
  name: string
  mark: number
}

const Silder: React.FC<IProps> = ({ name, mark }) => {
  const width = useSpring({width: `${mark}%`, from: {width: '0%'}})
  const left = useSpring({left: `${mark}%`, from: {left: '0%'}})
  return (
    <div className={styles.sider}>
      <span>{name}</span>
      <div className={styles.siderBackgroud}>
        <animated.div className={styles.siderHighlight} style={width}/>
        <animated.div className={styles.siderBall} style={left} />
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
