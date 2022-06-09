import React from "react";
import DropdownLinks from './DropdownLinks'
import "./Dropdown.scss";

function Dropdown() {

  return (
    <div>
        <ul className="dropdown">
            {DropdownLinks.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.linkName} href={item.path}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Dropdown