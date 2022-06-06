import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className='nav'>
        <a a href='#hero' className='nav__title'>JL</a>
        <ul className='nav__list'>
            <li className='nav__links'><a href='#hero'>Home</a></li>
            <li className='nav__links'><a href='#projects'>Projects</a></li>
            <li className='nav__links'><a href='#skills'>Skills</a></li>
        </ul>
    </nav>
  )
}

export default Nav