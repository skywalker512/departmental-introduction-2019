import { useEffect, useState, useRef} from 'react'

export default () => {
  const [isProcessed, setProcess] = useState(false)
  const requestRef: any = useRef();

  useEffect(()=>{
    requestRef.current = requestAnimationFrame(()=>{
      setProcess(true)
    })
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return isProcessed
}
