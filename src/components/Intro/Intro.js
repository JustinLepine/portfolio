import React, { useEffect } from 'react';
import './Intro.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Intro() {  

  const { ref, inView } = useInView({
    threshold: 0.4
  });
  
  const animation = useAnimation();

  useEffect(() => {
    if(inView) {
      animation.start({
        transition: { duration: 0.8 },
        x:0,
        opacity: 1
      });
    }
    if(!inView) {
      animation.start({
        transition: { duration: 1 },
        x: 0,
        opacity: 0
      })

    }
  }, [inView, animation]);
  
  return (
<section className='intro' ref={ref}>
    <motion.div className='intro__box' animate={ animation }>
        <h2 className='intro__title'>About Me :</h2>
        <p className='intro__content'>With a passion for tech in 2022 I made the decision to change my life and pursue a lifetime dream of coding.</p>
    </motion.div>
</section>
  )
}

export default Intro;