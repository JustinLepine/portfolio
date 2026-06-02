import { useState } from 'react'
import BlobScene from './BlobScene'
import { CodeEditorModal } from '../CodeEditor'
import { blobLines } from '../CodeEditor/data'
import Typewriter from './Typewriter'
import infoImg from '../../assets/icons/info.png'
import data from '..'

const heroPhrases = data.typewriter.hero

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <div className="hero">
      <BlobScene />
      <h2 className="hero_text">
        <Typewriter arrPhrases={heroPhrases} />
      </h2>
      <button className="hero_button" onClick={() => setOpen(true)}>
        <img alt='info' src={infoImg} />
      </button>
      <CodeEditorModal open={open} onClose={() => setOpen(false)} lines={blobLines} filename="BlobScene.tsx" />
    </div>
  )
}
