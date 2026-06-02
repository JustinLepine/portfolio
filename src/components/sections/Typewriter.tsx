import { useState, useEffect } from 'react'

interface TypewriterT {
  arrPhrases: string[]
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function Typewriter({ arrPhrases }: TypewriterT) {
  const [text, setText] = useState('')
  const [highlighted, setHighlighted] = useState(false)
  const [showCaret, setShowCaret] = useState(true)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    let delay = 0

    const schedule = (fn: () => void, d: number) => {
      timers.push(setTimeout(fn, d))
    }

    const ending = arrPhrases[Math.floor(Math.random() * arrPhrases.length)]
    const loop = [...arrPhrases.filter(p => p !== ending), ending]

    for (const phrase of loop) {
      const isLast = phrase === ending
      for (let i = 1; i <= phrase.length; i++) {
        const slice = phrase.slice(0, i)
        if (i < phrase.length && Math.random() < 0.01) {
          const typo = slice + 'x'
          schedule(() => setText(typo), delay)
          delay += randomBetween(80, 150)
          schedule(() => setText(slice), delay)
          delay += randomBetween(60, 100)
        } else {
          schedule(() => setText(slice), delay)
          delay += randomBetween(70, 140)
        }
      }

      delay += randomBetween(800, 1200)

      if (!isLast) {
        if (Math.random() < 0.5) {
          schedule(() => setHighlighted(true), delay)
          delay += randomBetween(500, 900)
          schedule(() => { setText(''); setHighlighted(false) }, delay)
          delay += randomBetween(200, 400)
        } else {
          for (let i = phrase.length - 1; i >= 0; i--) {
            const slice = phrase.slice(0, i)
            schedule(() => setText(slice), delay)
            delay += randomBetween(40, 90)
          }
        }
        delay += randomBetween(200, 400)
      }
    }

    return () => timers.forEach(clearTimeout)
  }, [])

  // blink caret
  useEffect(() => {
    const id = setInterval(() => setShowCaret(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="typewriter">
      <span className={highlighted ? 'highlighted' : ''}>{text}</span>
      <span className={`caret ${showCaret ? 'visible' : 'hidden'}`}>|</span>
    </span>
  )
}
