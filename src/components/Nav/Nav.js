import React from 'react';
import { Link } from "react-scroll"
import './Nav.scss';

function Nav() {
  
  return (
    <nav className='nav'>
      <Link to="hero" smooth={true} duration={0} delay={0}>
        <p>JL</p>
      </Link>
      <div>
        <Link className='nav__links' to="projects" smooth={true} duration={0} delay={0}>
          Projects
        </Link>
        <Link className='nav__links' to="skills" smooth={true} duration={0} delay={0}>
          Skills
        </Link>
      </div>
    </nav>
  )
}

export default Nav