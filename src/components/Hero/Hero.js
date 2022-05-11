import React from 'react';
import './Hero.scss';
import Typewriter from './Typewriter';

function Hero() {

  // const typewriter = new Typewriter(document.querySelector('.type'), { loop: false })
  const typewriter = new Typewriter(document.body, { loop: false })
  
typewriter
  .pauseFor(1000)
  .typeString("Hey!")
  .pauseFor(1000)
  .deleteChars(4)
  .typeString("Hello!")
  .pauseFor(1000)
  .start()

  return (
    <section className='hero'>
      <div id='type' className='type'></div>
        <h2 className='hero__subtitle'>Full Stack Web Developer</h2>
    </section>
  )
}

export default Hero