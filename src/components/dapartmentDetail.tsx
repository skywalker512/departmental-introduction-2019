import React, { useState } from 'react'
import styles from './dapartmentDetail.less'

const DepartmentDetail: React.FC = ({ children }) => {
  const P: React.FC<{ text: string }> = ({text}) => {
    const [pText, setPText] = useState('')
    let count = 0
    const requestRef: any = React.useRef();
    const previousTimeRef: any = React.useRef();

    const animate = (time: number) => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        count = (count + deltaTime * 0.05)
        setPText(text.slice(0, Math.round(count)))
      }
      previousTimeRef.current = time;
      if (count < text.length) {
        requestRef.current = requestAnimationFrame(animate);
      }
    }

    React.useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return <p>{pText}</p>
  }

  return (
    <div className={styles.wapper}>
      <P text={children as string}/>
    </div>
  )
}

export default DepartmentDetail
