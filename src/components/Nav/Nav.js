import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className='nav'>
        <h2 className='nav__title'>Justin Lepine</h2>
        <ul className='nav__list'>
            <li className='nav__links'>Home</li>
            <li className='nav__links'>Projects</li>
            <li className='nav__links'>About Me</li>
        </ul>
    </nav>
  )
}

export default Nav