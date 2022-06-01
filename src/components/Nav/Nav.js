import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className='nav'>
        <h2 className='nav__title'>JL</h2>
        <ul className='nav__list'>
            <li className='nav__links'><a href='#hero'>Home</a></li>
            <li className='nav__links'><a href='#projects'>Projects</a></li>
            <li className='nav__links'><a href='#skills'>Skills</a></li>
            <li className='nav__links'>About Me</li>
        </ul>
    </nav>
  )
}

export default Nav