import { useEffect, useState } from 'react'

export const useResizeDebounce = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const handleWindowResize = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setInnerWidth(window.innerWidth), 80)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { innerWidth }
}
