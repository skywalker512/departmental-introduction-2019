import React, { useState } from 'react'
export default function useWord(text: string, rate: number = 0.2, delay: number = 0) {
  const [pText, setPText] = useState('')
  let count = 0
  const requestRef: any = React.useRef();
  const previousTimeRef: any = React.useRef();
  const setTimeoutRef: any = React.useRef();

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      count = (count + deltaTime * rate)
      setPText(text.slice(0, Math.round(count)))
    }
    previousTimeRef.current = time;
    if (count < text.length) {
      requestRef.current = requestAnimationFrame(animate);
    }
  }

  React.useEffect(() => {
    setTimeoutRef.current = setTimeout(()=>{
      requestRef.current = requestAnimationFrame(animate);
    }, delay)
    return () => {
      cancelAnimationFrame(requestRef.current)
      clearTimeout(setTimeoutRef.current)
    };
  }, []);

  return pText
}
