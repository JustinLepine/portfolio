import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HobbiesList from './HobbiesList';
import './Hobbies.scss';

const Hobbies = () => {
    const [filterHobby, setFilterHobby] = useState(HobbiesList.filter((hobby) => hobby.type.includes("Fishing / Camping")));
    const [activeFilter, setActiveFilter] = useState(HobbiesList);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const { ref, inView } = useInView({
        threshold: 0.2,
      });
    
      const animation = useAnimation();
    
      useEffect(() => {
        if (inView) {
          animation.start({
            transition: { duration: 0.8 },
            x: 0,
            opacity: 1,
          });
        }
        if (!inView) {
          animation.start({
            transition: { duration: 1 },
            x: 0,
            opacity: 0,
          });
        }
      }, [inView, animation]);

      const handleHobbiesFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 0, opacity: 0 }]);
    
        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);
    
          if (item === "All") {
            setFilterHobby(HobbiesList.filter((skill) => skill.learning.includes('false')));
          } else {
            setFilterHobby(HobbiesList.filter((skill) => skill.type.includes(item)));
          }
        }, 500);
      };

  return (
    <motion.section ref={ref} id="Hobbies" className='hobbies'>
        <h2 className='hobbies__title'>Hobbies :</h2>
        {["Fishing / Camping", "Cars / Mechanics", "Gaming / Tech", "Shoes", "Anime"].map((item, index) => (
              <div key={index} onClick={() => handleHobbiesFilter(item)} className={`skills__filter ${ activeFilter === item ? "item-active" : "" }`} >
                {item}
              </div>
            ))}

            {filterHobby.map((hobby, index) => (
              <motion.div
                key={index}
                animate={animateCard}
                transition={{ duration: 0.5, delayChildrem: 0.5 }}
                className="skills__portfolio"
              >
                <p>{hobby.content}</p>
              </motion.div>
            ))}
    </motion.section>
  )
}

export default Hobbies