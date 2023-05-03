import { useEffect, useState } from 'react'

export default function useScroll() {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const updatePosition = () => {
      if (window.pageYOffset > 100) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])
  return isScroll
}
