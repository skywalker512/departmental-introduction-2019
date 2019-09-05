import React, { Fragment } from 'react'
import styles from './dapartmentDetail.less'
import useWord from '@/utilites/useWord'

const DepartmentDetail: React.FC = ({ children }) => {
  const P: React.FC<{ text: string }> = ({text}) => {
    const pText = useWord(text)
    return (<Fragment>
      <p style={{ opacity: pText.length < text.length ? 1 : 0, position: 'absolute' }}>{pText}</p>
      <p style={{ opacity: pText.length < text.length ? 0 : 1 }}>{text}</p>
    </Fragment>)
  }

  return (
    <div className={styles.wapper}>
      <P text={children as string}/>
    </div>
  )
}

export default DepartmentDetail
