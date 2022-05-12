import React from 'react';
// import Images from '../../assets/images';
import './Nav.scss';

function Nav() {
  return (
    <nav className='nav'>
        {/* <img className='nav__logo' src={Images.curly}/> */}
        <h2 className='nav__title'>JL</h2>
        <ul className='nav__list'>
            <li className='nav__links'>Home</li>
            <li className='nav__links'>Projects</li>
            <li className='nav__links'>About Me</li>
        </ul>
    </nav>
  )
}

export default Nav