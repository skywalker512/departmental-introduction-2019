import React, { useEffect, useState, useRef } from 'react'

export default function useProcess (delay: number = 0) {
  const [isProcessed, setProcess] = useState(false)
  const requestRef: any = useRef()
  const setTimeoutRef: any = React.useRef()

  useEffect(() => {
    setTimeoutRef.current = setTimeout(() => {
      requestRef.current = requestAnimationFrame(() => {
        setProcess(true)
      })
    }, delay)
    return () => {
      cancelAnimationFrame(requestRef.current)
      clearTimeout(setTimeoutRef.current)
    }
  }, [])

  return isProcessed
}
