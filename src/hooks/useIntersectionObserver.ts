import { useEffect, useRef } from "react"

interface Options {
  threshold?: number
  unobserveOnIntersect?: boolean
  disconnectOnIntersect?: boolean
  onIntersect: () => void
  onLeave?: () => void
}

export const useIntersectionObserver = ( id: string, { threshold = 0.1, unobserveOnIntersect = false, disconnectOnIntersect = false, onIntersect, onLeave }: Options ) => {
  const onIntersectRef = useRef(onIntersect)
  const onLeaveRef = useRef(onLeave)
  onIntersectRef.current = onIntersect
  onLeaveRef.current = onLeave

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onIntersectRef.current()
          if (unobserveOnIntersect) obs.unobserve(entry.target)
          if (disconnectOnIntersect) obs.disconnect()
        } else {
          onLeaveRef.current?.()
        }
      })
    }, { threshold })

    const target = document.getElementById(id)
    if (target) observer.observe(target)

    return () => observer.disconnect()
  }, [id])
}
