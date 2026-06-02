import React, { useMemo, useRef } from 'react'
import { useResizeDebounce } from "../../hooks/useResizeDebounce.ts"
import data from "../index.ts"

const ITEM_WIDTH_PX = 160
const SPEED = 5

interface SkillT {
  direction?: React.CSSProperties['animationDirection']
  index: number
}

interface RepeatSkillT {
  amount: number
}

export function RepeatSkillReel({ amount }: RepeatSkillT) {
  return (
    <>
      {Array.from({ length: amount }, (_, index) => (
        <SkillReel index={index} key={index} />
      ))}
    </>
  )
}

function shuffleArray(arr: string[]): string[] {
  const array = [...arr]
  let index = array.length
  while (index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
  }
  return array
}

function SkillReel({ index }: SkillT) {
  const { innerWidth } = useResizeDebounce()
  const shuffled = useRef(shuffleArray(data.skills.map((s) => s.name)))

  const skills = useMemo(() => {
    const count = Math.ceil(innerWidth / ITEM_WIDTH_PX)
    const slice = shuffled.current.slice(0, count)
    return [...slice, ...slice, ...slice, ...slice]
  }, [innerWidth])

  const direction = index % 2 ? 'normal' : 'reverse'

  return (
    <div className="skill">
      <div className="skill-reel" style={{animationDuration: `${innerWidth / SPEED}s`, animationDirection: `${direction}`}}>
        {skills.map((skill, index) => (
          <p className="skill-reel_text" key={index}>{skill.toUpperCase()}</p>
        ))}
      </div>
    </div>
  )
}

export default RepeatSkillReel
