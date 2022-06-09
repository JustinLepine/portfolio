import React, { useState } from 'react';
import Dropdown from "../Dropdown/Dropdown";
import Drop from "../../assets/svg/drop.svg";
import './Nav.scss';

function Nav() {
  const [showDrop, setShowDrop] = useState(false);

  const onClick = () => {
    setShowDrop(!showDrop);
  };

  return (
    <nav className='nav'>
      <a a href='#hero' className='nav__title'>JL</a>
      <div className='nav__right'>
        <ul className='nav__list'>
            <li className='nav__links'><a href='#hero'>Home</a></li>
            <li className='nav__links'><a href='#projects'>Projects</a></li>
            <li className='nav__links'><a href='#skills'>Skills</a></li>
        </ul>
        <div className="nav__drop" onClick={onClick}>
          <img src={Drop} alt="drop"></img>
          {showDrop && <Dropdown />}
        </div>
      </div>
    </nav>
  )
}

export default Nav